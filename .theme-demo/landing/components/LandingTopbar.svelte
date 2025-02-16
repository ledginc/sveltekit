<script lang="ts">
    import Logo from "$lib/components/Logo.svelte";
    import ThemeToggleDropdown from "$lib/components/ThemeToggleDropdown.svelte";

    let scrollPosition = $state(0);
    let scrolling = $state<"up" | "down" | undefined>(undefined);

    let prevScrollPosition = $state(0);

    const handleScroll = () => {
        setTimeout(() => {
            prevScrollPosition = scrollPosition;
            scrollPosition = window.scrollY;
        }, 200);
    };

    $effect(() => {
        window.addEventListener("scroll", handleScroll, { passive: true });
        if (scrollPosition < 500) {
            scrolling = undefined;
        } else {
            if (scrollPosition - prevScrollPosition > 0) {
                scrolling = "down";
            } else if (scrollPosition - prevScrollPosition < 0) {
                scrolling = "up";
            }
        }
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    });
</script>

<div
    data-scrolling={scrolling}
    data-at-top={scrollPosition < 30}
    class="group fixed inset-x-0 z-[60] flex justify-center transition-[top] duration-500 data-[scrolling=down]:-top-full sm:container [&:not([data-scrolling=down])]:top-4">
    <div
        class="group-data-[at-top=false]:bg-base-100 group-data-[at-top=false]:dark:bg-base-200 flex w-full items-center justify-between rounded-full px-6 py-3 transition-all duration-500 group-data-[at-top=false]:w-[800px] group-data-[at-top=false]:shadow group-data-[at-top=false]:max-sm:mx-2 lg:py-1.5">
        <div class="flex items-center gap-2">
            <div class="flex-none lg:hidden">
                <div class="drawer">
                    <input id="demo-drawer" type="checkbox" class="drawer-toggle" />
                    <div class="drawer-content">
                        <label for="demo-drawer" class="btn drawer-button btn-ghost btn-square btn-sm">
                            <span class="iconify lucide--menu size-4.5"></span>
                        </label>
                    </div>
                    <div class="drawer-side z-[50]">
                        <label for="demo-drawer" aria-label="close sidebar" class="drawer-overlay"></label>
                        <ul class="menu bg-base-100 text-base-content min-h-full w-80 p-4">
                            <li>
                                <p>Home</p>
                            </li>
                            <li>
                                <a href="/dashboards/ecommerce">Dashboard</a>
                            </li>
                            <li>
                                <a href="/ui/components/accordion">Components</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <a href="/dashboards/ecommerce">
                <Logo />
            </a>
        </div>
        <div class="gap-3">
            <ul class="menu menu-horizontal hidden gap-2 px-1 lg:inline-flex">
                <li>
                    <p>Home</p>
                </li>
                <li>
                    <a href="/dashboards/ecommerce">Dashboard</a>
                </li>
                <li>
                    <a href="/ui/components/accordion">Components</a>
                </li>
            </ul>
        </div>
        <div class="inline-flex items-center gap-2.5">
            <ThemeToggleDropdown
                triggerClass="btn btn-square btn-sm border-transparent bg-transparent"
                dropdownClass="dropdown-center dropdown-end" />
            <a href="https://daisyui.com/store/" target="_blank" class="btn btn-primary btn-sm btn-square">
                <span class="iconify lucide--shopping-cart size-4"></span>
            </a>
        </div>
    </div>
</div>
