<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import ProductTable from "./ProductTable.svelte";
</script>

<div>
    <PageTitle items={[{ label: "Ecommerce" }, { label: "Shops", active: true }]} title="Shops" />
    <div class="mt-6">
        <ProductTable />
    </div>
</div>
