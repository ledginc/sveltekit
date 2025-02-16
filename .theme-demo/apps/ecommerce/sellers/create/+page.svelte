<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CreateSellerForm from "./CreateSellerForm.svelte";
</script>

<div>
    <PageTitle
        items={[
            { label: "Sellers", path: "/apps/ecommerce/sellers" },
            { label: "Create", active: true },
        ]}
        title="Create Seller" />
    <div class="mt-6">
        <CreateSellerForm />
    </div>
</div>
