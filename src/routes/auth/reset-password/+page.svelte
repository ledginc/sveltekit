<script>
    import Logo from "$lib/components/Logo.svelte";
    import ThemeToggleDropdown from "$lib/components/ThemeToggleDropdown.svelte";

    let showPassword = $state(false);
</script>

<div class="flex flex-col items-stretch p-8 lg:p-16">
    <div class="flex items-center justify-between">
        <a href="/dashboards/ecommerce">
            <Logo />
        </a>
        <ThemeToggleDropdown triggerClass="btn btn-circle btn-outline border-base-300" dropdownClass="dropdown-end" />
    </div>
    <h3 class="mt-8 text-center text-xl font-semibold md:mt-12 lg:mt-24">Reset Password</h3>
    <h3 class="text-base-content/70 mt-2 text-center text-sm">
        Seamless Access, Secure Connection: Your Gateway to a Personalized Experience.
    </h3>
    <div class="mt-6 md:mt-10">
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Password</legend>
            <label class="input w-full focus:outline-0">
                <span class="iconify lucide--key-round text-base-content/80 size-5"></span>
                <input class="grow focus:outline-0" placeholder="Password" type={showPassword ? "text" : "password"} />
                <button
                    class="btn btn-xs btn-ghost btn-circle"
                    onclick={() => (showPassword = !showPassword)}
                    aria-label="Password">
                    {#if showPassword}
                        <span class="iconify lucide--eye-off size-4"></span>
                    {:else}
                        <span class="iconify lucide--eye size-4"></span>
                    {/if}
                </button>
            </label>
        </fieldset>
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Confirm Password</legend>
            <label class="input w-full focus:outline-0">
                <span class="iconify lucide--key-round text-base-content/80 size-5"></span>
                <input
                    class="grow focus:outline-0"
                    placeholder="Confirm Password"
                    type={showPassword ? "text" : "password"} />
                <button
                    class="btn btn-xs btn-ghost btn-circle"
                    onclick={() => (showPassword = !showPassword)}
                    aria-label="Password">
                    {#if showPassword}
                        <span class="iconify lucide--eye-off size-4"></span>
                    {:else}
                        <span class="iconify lucide--eye size-4"></span>
                    {/if}
                </button>
            </label>
        </fieldset>

        <div class="mt-4 flex items-center gap-3 md:mt-6">
            <input
                class="checkbox checkbox-sm checkbox-primary"
                aria-label="Checkbox example"
                type="checkbox"
                id="agreement" />
            <label for="agreement" class="text-sm">
                I agree with
                <span class="text-primary ms-1 cursor-pointer hover:underline">terms and conditions</span>
            </label>
        </div>

        <a href="/dashboards/ecommerce" class="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
            <span class="iconify lucide--check size-4"></span>
            Change Password
        </a>

        <p class="mt-4 text-center text-sm md:mt-6">
            Go to
            <a class="text-primary ms-1.5 hover:underline" href="/auth/login"> Login </a>
        </p>
    </div>
</div>
