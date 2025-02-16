<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import EditCustomerForm from "./EditCustomerForm.svelte";
</script>

<div>
    <PageTitle
        items={[
            { label: "Customers", path: "/apps/ecommerce/customers" },
            { label: "Edit", active: true },
        ]}
        title="Edit Customer" />
    <div class="mt-6">
        <EditCustomerForm />
    </div>
</div>
