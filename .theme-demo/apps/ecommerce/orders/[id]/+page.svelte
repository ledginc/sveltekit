<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import OrderCustomerDetails from "./components/OrderCustomerDetails.svelte";
    import OrderDeliveryAddress from "./components/OrderDeliveryAddress.svelte";
    import OrderDeliveryPartner from "./components/OrderDeliveryPartner.svelte";
    import OrderItemsTable from "./components/OrderItemsTable.svelte";
    import OrderPaymentDetails from "./components/OrderPaymentDetails.svelte";
    import OrderTrack from "./components/OrderTrack.svelte";
</script>

<div>
    <PageTitle
        title="Order Detail"
        items={[
            { label: "Orders", path: "/apps/ecommerce/orders" },
            { label: "Detail", active: true },
        ]} />
    <div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
        <div class="lg:col-span-8 2xl:col-span-9">
            <OrderItemsTable />
            <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2 2xl:grid-cols-3">
                <div>
                    <OrderPaymentDetails />
                </div>
                <div>
                    <OrderCustomerDetails />
                </div>
                <div>
                    <OrderDeliveryAddress />
                </div>
            </div>
        </div>
        <div class="lg:col-span-4 2xl:col-span-3">
            <div class="card card-border bg-base-100">
                <div class="card-body gap-0">
                    <p class="bg-base-200 rounded-box px-3 py-2 font-medium">Track Order</p>
                    <div class="mt-2">
                        <OrderTrack />
                    </div>
                    <p class="bg-base-200 rounded-box mt-4 px-3 py-2 font-medium">Delivery Partner</p>
                    <div class="mt-3">
                        <OrderDeliveryPartner />
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
