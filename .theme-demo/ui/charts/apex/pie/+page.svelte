<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import GradientDonutChart from "./GradientDonutChart.svelte";
    import MonochromePieChart from "./MonochromePieChart.svelte";
    import PatternDonutChart from "./PatternDonutChart.svelte";
    import SimplePieChart from "./SimplePieChart.svelte";
</script>

<div>
    <PageTitle title="Area Charts" items={[{ label: "Apex Charts" }, { label: "Area", active: true }]} />

    <div class="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Simple Pie</div>
                <SimplePieChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Monochrome Pie</div>
                <MonochromePieChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Gradient Donut</div>
                <GradientDonutChart />
            </div>
        </div>
        <div class="card card-border bg-base-100">
            <div class="card-body gap-3 pb-0">
                <div class="card-title">Pattern Donut</div>
                <PatternDonutChart />
            </div>
        </div>
    </div>
</div>
