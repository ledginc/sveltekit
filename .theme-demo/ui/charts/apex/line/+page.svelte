<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import AnnotationLineChart from "./AnnotationLineChart.svelte";
    import LabelLineChart from "./LabelLineChart.svelte";
    import StepLineChart from "./StepLineChart.svelte";
    import SyncingLineChart from "./SyncingLineChart.svelte";
</script>

<div>
    <PageTitle title="Bar Charts" items={[{ label: "Apex Charts" }, { label: "Bar", active: true }]} />
    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Label Line</div>
                <LabelLineChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Step Line</div>
                <StepLineChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Syncing Line</div>
                <SyncingLineChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Annotation Line</div>
                <AnnotationLineChart />
            </div>
        </div>
    </div>
</div>
