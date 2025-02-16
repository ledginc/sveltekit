<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import OrderTable from "./OrderTable.svelte";
</script>

<div>
    <PageTitle title="Orders" items={[{ label: "Ecommerce" }, { label: "Orders", active: true }]} />
    <div class="mt-6">
        <OrderTable />
    </div>
</div>
