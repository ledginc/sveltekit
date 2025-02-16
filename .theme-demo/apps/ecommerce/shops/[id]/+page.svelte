<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import EditShopForm from "./EditShopForm.svelte";
</script>

<div>
    <PageTitle
        items={[
            { label: "Shops", path: "/apps/ecommerce/shops" },
            { label: "Edit", active: true },
        ]}
        title="Edit Shop" />
    <div class="mt-6">
        <EditShopForm />
    </div>
</div>
