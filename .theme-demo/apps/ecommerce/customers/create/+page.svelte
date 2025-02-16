<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CreateCustomerForm from "./CreateCustomerForm.svelte";
</script>

<div>
    <PageTitle
        items={[
            { label: "Customers", path: "/apps/ecommerce/customers" },
            { label: "Create", active: true },
        ]}
        title="Create Customer" />
    <div class="mt-6">
        <CreateCustomerForm />
    </div>
</div>
