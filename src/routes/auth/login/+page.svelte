<script>
    import Logo from "$lib/components/Logo.svelte";
    import ThemeToggleDropdown from "$lib/components/ThemeToggleDropdown.svelte";

    let showPassword = $state(false);
    
</script>

<div class="flex flex-col items-stretch p-6 md:p-8 lg:p-16">
    <div class="flex items-center justify-between">
        <a href="/">
            <Logo />
        </a>
        <ThemeToggleDropdown dropdownClass="dropdown-end" triggerClass="btn btn-circle btn-outline border-base-300" />
    </div>
    <div class="flex justify-center md:mt-2 lg:mt-4">
      <img class="md:mt-4 lg:mt-8 w-40 aspect-auto h-auto" src="https://protech-portal.web.app/assets/protech-CaSvsdQL.webp" />
    </div>
    <h3 class="mt-8 text-center text-xl font-semibold md:mt-4 lg:mt-8">Se connecter</h3>
    <div class="mt-6 md:mt-10">
        <fieldset class="fieldset">
            <legend class="fieldset-legend">Adresse courriel</legend>
            <label class="input w-full focus:outline-0">
                <span class="iconify lucide--mail text-base-content/80 size-5"></span>
                <input class="grow focus:outline-0" placeholder="jean@tremblay.ca" type="email" />
            </label>
        </fieldset>

        <fieldset class="fieldset">
            <legend class="fieldset-legend">Mot de passe</legend>
            <label class="input w-full focus:outline-0">
                <span class="iconify lucide--key-round text-base-content/80 size-5"></span>
                <input class="grow focus:outline-0" placeholder="Superb0nMotd3P4sse!" type={showPassword ? "text" : "password"} />
                <button
                    aria-label="Password"
                    class="btn btn-xs btn-ghost btn-circle"
                    onclick={() => (showPassword = !showPassword)}>
                    {#if showPassword}
                        <span class="iconify lucide--eye-off size-4"></span>
                    {:else}
                        <span class="iconify lucide--eye size-4"></span>
                    {/if}
                </button>
            </label>
        </fieldset>

        <div class="text-end">
            <a class="label-text text-base-content/80 text-xs" href="/auth/forgot-password"> Mot de passe oublié? </a>
        </div>

        <div class="mt-4 flex items-center gap-3 md:mt-6">
            <input
                aria-label="Checkbox example"
                class="checkbox checkbox-sm checkbox-primary"
                id="agreement"
                type="checkbox" />
            <label class="text-sm" for="agreement">
                Je me souviens
            </label>
        </div>

        <a class="btn btn-primary btn-wide mt-4 max-w-full gap-3 md:mt-6" href="/dashboards/ecommerce">
            <span class="iconify lucide--log-in size-4"></span>
            Se connecter
        </a>

        <!-- <button class="btn btn-ghost btn-wide border-base-300 mt-4 max-w-full gap-3">
            <img alt="" class="size-6" src="/images/brand-logo/google-mini.svg" />
            Login with Google
        </button> -->

        <p class="text-base-content/80 mt-4 text-center text-sm md:mt-6">
            Vous n'avez pas de compte? 😧
            <a class="text-primary ms-1 hover:underline" href="/auth/register"> En créer un </a>
        </p>
    </div>
</div>
