<script lang="ts">
    type ILogo = {
        className?: string;
    };

    let { className }: ILogo = $props();
</script>

<div class="inline">
    <img src="/images/logo/logo-dark.png" alt="logo-dark" class={`hidden h-5.5 dark:inline ${className ?? ""}`} />
    <img src="/images/logo/logo-light.svg" alt="logo-light" class={`h-5.5 dark:hidden ${className ?? ""}`} />
</div>
