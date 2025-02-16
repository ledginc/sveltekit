<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import EditProductForm from "./EditProductForm.svelte";
</script>

<div>
    <PageTitle
        items={[
            { label: "Products", path: "/apps/ecommerce/products" },
            { label: "Edit", active: true },
        ]}
        title="Edit Product" />
    <div class="mt-6">
        <EditProductForm />
    </div>
</div>
