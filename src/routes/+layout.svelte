<script lang="ts">
    import ConfigProvider from "$lib/contexts/ConfigProvider.svelte";
    import "$lib/styles/app.css";

    let { children } = $props();
</script>

<svelte:head>
    <title>Nexus - Admin Template</title>
    <meta name="description" content="It's a admin & client dashboard. DaisyUI React Admin" />
</svelte:head>
<ConfigProvider>
    {@render children()}
</ConfigProvider>
