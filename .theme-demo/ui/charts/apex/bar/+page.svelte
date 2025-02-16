<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import GroupedBarChart from "./GroupedBarChart.svelte";
    import MarkerWithBarChart from "./MarkerWithBarChart.svelte";
    import NegativeValueBarChart from "./NegativeValueBarChart.svelte";
    import StackedBarChart from "./StackedBarChart.svelte";
</script>

<div>
    <PageTitle title="Bar Charts" items={[{ label: "Apex Charts" }, { label: "Bar", active: true }]} />
    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Bar With Markers</div>
                <MarkerWithBarChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Grouped Bar</div>
                <GroupedBarChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Stacked Bar</div>
                <StackedBarChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Negative Value</div>
                <NegativeValueBarChart />
            </div>
        </div>
    </div>
</div>
