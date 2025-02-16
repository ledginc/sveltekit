<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import EditSellerForm from "./EditSellerForm.svelte";
</script>

<div>
    <PageTitle
        items={[
            { label: "Sellers", path: "/apps/ecommerce/sellers" },
            { label: "Edit", active: true },
        ]}
        title="Edit Seller" />
    <div class="mt-6">
        <EditSellerForm />
    </div>
</div>
