<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import DumbbellColumnChart from "./DumbbellColumnChart.svelte";
    import NegativeValuesColumnChart from "./NegativeValuesColumnChart.svelte";
    import RangeColumnChart from "./RangeColumnChart.svelte";
    import StackedColumnChart from "./StackedColumnChart.svelte";
</script>

<div>
    <PageTitle title="Bar Charts" items={[{ label: "Apex Charts" }, { label: "Bar", active: true }]} />
    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Stacked Column</div>
                <StackedColumnChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Dumbbell Column</div>
                <DumbbellColumnChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Range Column</div>
                <RangeColumnChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Negative Values Column</div>
                <NegativeValuesColumnChart />
            </div>
        </div>
    </div>
</div>
