<script lang="ts">
    let { children } = $props();

    
</script>

<div class="grid grid-cols-12 overflow-auto sm:h-screen">
    <div class="relative hidden bg-[#FFE9D1] lg:col-span-7 lg:block xl:col-span-8 2xl:col-span-9 dark:bg-[#14181c] overflow-hidden">
        <img src="/images/client/auth-bg.jpg" class="object-cover w-full h-full" alt="auth-bg" />
        <div class="absolute inset-0 bg-[#00000099]"></div>
    </div>
    <div class="col-span-12 lg:col-span-5 xl:col-span-4 2xl:col-span-3">{@render children()}</div>
</div>
