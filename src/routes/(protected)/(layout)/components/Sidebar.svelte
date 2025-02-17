<script lang="ts">
    import { afterNavigate } from "$app/navigation";
    import { page } from "$app/state";
    import Logo from "$lib/components/Logo.svelte";
    import { useConfig } from "$lib/contexts/ConfigProvider.svelte";
    import SimpleBar from "simplebar";
    import "simplebar/dist/simplebar.min.css";
    import { getActivatedItemParentKeys } from "../helpers";
    import SidebarMenuItem, { type ISidebarMenuItem } from "./SidebarMenuItem.svelte";

    let { menuItems }: { menuItems: ISidebarMenuItem[] } = $props();

    const { config } = useConfig();

    let activatedParents = $state(new Set(getActivatedItemParentKeys(menuItems, page.url.pathname)));
    let scrollRef: HTMLDivElement;
    let simplebar: SimpleBar | undefined;

    afterNavigate(() => {
        activatedParents = new Set(getActivatedItemParentKeys(menuItems, page.url.pathname));
        setTimeout(() => {
            const contentElement = simplebar?.getContentElement();
            const scrollElement = simplebar?.getScrollElement();
            if (contentElement) {
                const activatedItem = contentElement.querySelector<HTMLElement>(".active");
                const top = activatedItem?.getBoundingClientRect().top;
                if (activatedItem && scrollElement && top && top !== 0) {
                    scrollElement.scrollTo({ top: scrollElement.scrollTop + top - 300, behavior: "smooth" });
                }
            }
        }, 100);

        if (window.innerWidth <= 64 * 16) {
            const sidebarTrigger = document.querySelector<HTMLInputElement>("#layout-sidebar-toggle-trigger");
            if (sidebarTrigger) {
                sidebarTrigger.checked = false;
            }
        }
    });

    $effect(() => {
        simplebar = new SimpleBar(scrollRef);
    });
</script>

<input class="hidden" id="layout-sidebar-toggle-trigger" type="checkbox" aria-label="Toggle layout sidebar" />

<div
    id="layout-sidebar"
    data-theme={$config.sidebarTheme === "dark" && ["light", "contrast"].includes($config.theme) ? "dark" : undefined}>
    <a href="/dashboards/ecommerce" class="flex min-h-16 items-center justify-center">
        <Logo />
    </a>
    <div class="relative min-h-0 grow">
        <div bind:this={scrollRef} class="size-full">
            <div id="sidebar-menu">
                {#each menuItems as item, index (index)}
                    <SidebarMenuItem {...item} activated={activatedParents} />
                {/each}
            </div>
        </div>
        <div class="from-base-100/60 absolute start-0 end-0 bottom-0 h-7 bg-linear-to-t to-transparent"></div>
    </div>

    <div class="mb-2">
        <hr class="border-base-300" />
        <ul class="menu w-full">
            <li>
                <a href="#settings" class="flex items-center gap-2">
                    <span class="iconify lucide--settings-2 size-4"></span>
                    Paramètres d'application
                </a>
            </li>
        </ul>
        <div class="dropdown dropdown-top dropdown-end w-full">
            <div
                tabIndex={0}
                role="button"
                class="bg-base-200 hover:bg-base-300 rounded-box mx-2 mt-0 flex cursor-pointer items-center gap-2.5 px-3 py-2 transition-all">
                <div class="avatar">
                    <div class="bg-base-200 mask mask-squircle w-8">
                        <img src="/images/avatars/1.png" alt="Avatar" />
                    </div>
                </div>
                <div class="grow -space-y-0.5">
                    <p class="text-sm font-medium">Bill</p>
                    <p class="text-base-content/60 text-xs">Mon compte</p>
                </div>
                <span class="iconify lucide--chevrons-up-down text-base-content/60 size-4"></span>
            </div>
            <ul
                role="menu"
                tabIndex={0}
                class="dropdown-content menu bg-base-100 rounded-box shadow-base-content/4 mb-1 w-48 p-1 shadow-[0px_-10px_40px_0px]">
                <li>
                    <div>
                        <span class="iconify lucide--user size-4"></span>
                        <span>Mon compte</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span class="iconify lucide--settings size-4"></span>
                        <span>Paramètres du compte</span>
                    </div>
                </li>
                <li>
                    <div>
                        <span class="iconify lucide--bell size-4"></span>
                        <span>Notifications</span>
                    </div>
                </li>
                <li>
                  <div>
                      <span class="iconify lucide--help-circle size-4"></span>
                      <span>Aide</span>
                  </div>
                </li>
                <li>
                      <a class="text-error hover:bg-error/10" href="/auth/login">
                        <span class="iconify lucide--log-out size-4"></span>
                        <span>Se déconnecter</span>
                      </a>  
                </li>
            </ul>
        </div>
    </div>
</div>

<label for="layout-sidebar-toggle-trigger" id="layout-sidebar-backdrop"></label>
