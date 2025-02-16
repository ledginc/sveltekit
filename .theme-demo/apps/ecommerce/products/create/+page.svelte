<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CreateProductForm from "./CreateProductForm.svelte";
</script>

<div>
    <PageTitle
        items={[
            { label: "Products", path: "/apps/ecommerce/products" },
            { label: "Create", active: true },
        ]}
        title="Create Product" />
    <div class="mt-6">
        <CreateProductForm />
    </div>
</div>
