<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CustomerDealsCard from "./components/CustomerDealsCard.svelte";
    import GoalStatusCard from "./components/GoalStatusCard.svelte";
    import PremiumCard from "./components/PremiumCard.svelte";
    import QuickIntegrationCard from "./components/QuickIntegrationCard.svelte";
    import SalesMetricCard from "./components/SalesMetricCard.svelte";
    import SocialAcquisitionCard from "./components/SocialAcquisitionCard.svelte";
    import StatList from "./components/StatList.svelte";
</script>

<div>
    <PageTitle title="CRM Overview" items={[{ label: "Dashboards" }, { label: "CRM", active: true }]} />
    <div class="mt-6">
        <div class="grid grid-cols-12 gap-5">
            <div class="col-span-12 md:col-span-4 xl:col-span-2">
                <StatList />
            </div>
            <div class="col-span-12 md:col-span-8 xl:col-span-7">
                <SalesMetricCard />
            </div>
            <div class="col-span-12 xl:col-span-3">
                <div class="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-1">
                    <div class="col-span-1">
                        <PremiumCard />
                    </div>
                    <div class="col-span-1">
                        <GoalStatusCard />
                    </div>
                </div>
            </div>
        </div>
        <div class="mt-5 grid grid-cols-1 gap-5 xl:grid-cols-2 2xl:grid-cols-3">
            <div class="col-span-1">
                <SocialAcquisitionCard />
            </div>
            <div class="col-span-1">
                <CustomerDealsCard />
            </div>

            <div class="col-span-1">
                <QuickIntegrationCard />
            </div>
        </div>
    </div>
</div>
