<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CreateShopForm from "./CreateShopForm.svelte";
</script>

<div>
    <PageTitle
        items={[
            { label: "Shops", path: "/apps/ecommerce/shops" },
            { label: "Create", active: true },
        ]}
        title="Create Shop" />
    <div class="mt-6">
        <CreateShopForm />
    </div>
</div>
