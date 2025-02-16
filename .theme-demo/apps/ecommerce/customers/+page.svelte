<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CustomerTable from "./CustomerTable.svelte";
</script>

<div>
    <PageTitle title="Customers" items={[{ label: "Ecommerce" }, { label: "Customers", active: true }]} />
    <div class="mt-6">
        <CustomerTable />
    </div>
</div>
