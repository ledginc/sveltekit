<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import IrregularTimeSeriesAreaChart from "./IrregularTimeSeriesAreaChart.svelte";
    import NegativeValueAreaChart from "./NegativeValueAreaChart.svelte";
    import SelectionAreaChart from "./SelectionAreaChart.svelte";
    import SplineAreaChart from "./SplineAreaChart.svelte";
</script>

<div>
    <PageTitle title="Area Charts" items={[{ label: "Apex Charts" }, { label: "Area", active: true }]} />

    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Spline Area</div>
                <SplineAreaChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Negative Value Area</div>
                <NegativeValueAreaChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Irregular Time Series Area</div>
                <IrregularTimeSeriesAreaChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Selection Area</div>
                <SelectionAreaChart />
            </div>
        </div>
    </div>
</div>
