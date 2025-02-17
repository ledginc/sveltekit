<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import CustomerDealsCard from "./(dashboard)/components/CustomerDealsCard.svelte";
    import GoalStatusCard from "./(dashboard)/components/GoalStatusCard.svelte";
    import PremiumCard from "./(dashboard)/components/PremiumCard.svelte";
    import QuickIntegrationCard from "./(dashboard)/components/QuickIntegrationCard.svelte";
    import SalesMetricCard from "./(dashboard)/components/SalesMetricCard.svelte";
    import StatList from "./(dashboard)/components/StatList.svelte";
</script>

<div>
    <PageTitle title="Protech Peinture - Tableau de bord " items={[{ label: "Tableau de bord", active: true }]} />
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
    </div>
</div>
