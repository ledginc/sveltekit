<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CustomerAcquisitionCard from "./components/CustomerAcquisitionCard.svelte";
    import GlobalSaleCard from "./components/GlobalSaleCard.svelte";
    import QuickChatCard from "./components/QuickChatCard.svelte";
    import RecentOrderCard from "./components/RecentOrderCard.svelte";
    import RevenueStatisticCard from "./components/RevenueStatisticCard.svelte";
    import StatList from "./components/StatList.svelte";
</script>

<div>
    <PageTitle title="Business Overview" items={[{ label: "Dashboards" }, { label: "Ecommerce", active: true }]} />
    <div class="mt-6">
        <StatList />
        <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-12">
            <div class="xl:col-span-7">
                <RevenueStatisticCard />
            </div>
            <div class="xl:col-span-5">
                <CustomerAcquisitionCard />
            </div>
        </div>
        <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-5 2xl:grid-cols-12">
            <div class="xl:col-span-3 2xl:col-span-5">
                <RecentOrderCard />
            </div>
            <div class="xl:col-span-2 2xl:col-span-3">
                <QuickChatCard />
            </div>
            <div class="xl:col-span-3 2xl:col-span-4">
                <GlobalSaleCard />
            </div>
        </div>
    </div>
</div>
