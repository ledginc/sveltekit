<script module lang="ts">
    import type { HTMLAnchorAttributes } from "svelte/elements";
    import SidebarMenuItem from "./SidebarMenuItem.svelte";
    import SidebarMenuItemBadges, { type ISidebarMenuItemBadges } from "./SidebarMenuItemBadges.svelte";

    export type ISidebarMenuItem = {
        id: string;
        icon?: string;
        label: string;
        isTitle?: boolean;
        url?: string;
        linkProp?: HTMLAnchorAttributes;
        children?: ISidebarMenuItem[];
    } & ISidebarMenuItemBadges;
</script>

<script lang="ts">
    let {
        id,
        url,
        children,
        icon,
        isTitle,
        badges,
        linkProp,
        label,
        activated,
    }: ISidebarMenuItem & { activated: Set<string> } = $props();
    let selected = $derived(activated.has(id));
</script>

{#if isTitle}
    <p class="sidebar-menu-title">{label}</p>
{:else if !children}
    <a href={url ?? ""} class={`sidebar-menu-item  ${selected && "active"}`} {...linkProp}>
        {#if icon}
            <span class={`iconify ${icon} size-4`}></span>
        {/if}
        <span class="grow">{label}</span>
        <SidebarMenuItemBadges {badges} />
    </a>
{:else}
    <div class="collapse group">
        <input
            aria-label="Sidemenu item trigger"
            type="checkbox"
            name="sidebar-menu-parent-item"
            defaultChecked={selected}
            class="peer" />
        <div class="collapse-title">
            {#if icon}
                <span class={`iconify ${icon} size-4`} />
            {/if}
            <span class="grow">{label}</span>
            <SidebarMenuItemBadges {badges} />
            <span class="iconify lucide--chevron-right arrow-icon size-3.5" />
        </div>
        <div class="collapse-content">
            {#each children as item, index (index)}
                <SidebarMenuItem {...item} {activated} />
            {/each}
        </div>
    </div>
{/if}
