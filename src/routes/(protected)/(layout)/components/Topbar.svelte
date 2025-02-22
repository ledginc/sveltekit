<script lang="ts">
    import ThemeToggleDropdown from "$lib/components/ThemeToggleDropdown.svelte";
    import TopbarNotificationButton from "./TopbarNotificationButton.svelte";
    import TopbarSearchButton from "./TopbarSearchButton.svelte";
</script>

<div role="navigation" aria-label="Navbar" class="flex items-center justify-between px-3" id="layout-topbar">
    <div class="inline-flex items-center gap-3">
        <label class="btn btn-square btn-ghost btn-sm" aria-label="Leftmenu toggle" for="layout-sidebar-toggle-trigger">
            <span class="iconify lucide--menu size-5"></span>
        </label>
        <TopbarSearchButton />
    </div>
    <div class="inline-flex items-center gap-1.5">
        <ThemeToggleDropdown
            triggerClass="btn btn-sm btn-circle btn-ghost"
            dropdownClass="dropdown-center"
            dropdownContentClass="mt-2"
            iconClass="size-4.5" />
        <TopbarNotificationButton />
    </div>
</div>
