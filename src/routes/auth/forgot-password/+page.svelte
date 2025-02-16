<script>
    import Logo from "$lib/components/Logo.svelte";
    import ThemeToggleDropdown from "$lib/components/ThemeToggleDropdown.svelte";
</script>

<div class="flex flex-col items-stretch p-8 lg:p-16">
    <div class="flex items-center justify-between">
        <a href="/dashboards/ecommerce">
            <Logo />
        </a>
        <ThemeToggleDropdown triggerClass="btn btn-circle btn-outline border-base-300" dropdownClass="dropdown-end" />
    </div>
    <h3 class="mt-8 text-center text-xl font-semibold md:mt-12 lg:mt-24">Forgot Password</h3>
    <h3 class="text-base-content/70 mt-2 text-center text-sm">
        Seamless Access, Secure Connection: Your Gateway to a Personalized Experience.
    </h3>
    <div class="mt-6 md:mt-10">
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Email Address</legend>
            <label class="input w-full focus:outline-0">
                <span class="iconify lucide--mail text-base-content/80 size-5"></span>
                <input class="grow focus:outline-0" placeholder="Email Address" type="email" />
            </label>
        </fieldset>

        <div class="mt-2 flex items-center gap-3 md:mt-4">
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

        <a href="/auth/reset-password" class="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6">
            <span class="iconify lucide--mail-plus size-4"></span>
            Send a reset link
        </a>
        <p class="text-base-content/80 mt-4 text-center text-sm md:mt-6">
            I have already to
            <a class="text-primary ms-1 hover:underline" href="/auth/login"> Login </a>
        </p>
    </div>
</div>
