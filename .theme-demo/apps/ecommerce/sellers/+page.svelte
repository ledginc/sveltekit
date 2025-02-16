<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import SellerTable from "./SellerTable.svelte";
</script>

<div>
    <PageTitle items={[{ label: "Ecommerce" }, { label: "Sellers", active: true }]} title="Sellers" />
    <div class="mt-6">
        <SellerTable />
    </div>
</div>
