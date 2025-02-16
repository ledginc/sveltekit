<script lang="ts">
    import { type ApexOptions } from "apexcharts";
    import { onMount } from "svelte";

    const chartOptions: ApexOptions = {
        chart: {
            type: "pie",
            height: 380,
            toolbar: {
                show: false,
            },
            background: "transparent",
        },
        theme: {
            monochrome: {
                enabled: true,
                color: "#167bff",
                shadeTo: "light",
                shadeIntensity: 0.8,
            },
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["var(--color-base-100)"],
        },
        title: {
            text: "App Downloads",
            style: { fontWeight: "500" },
            align: "right",
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (value) => value + " Downloads",
            },
        },
        labels: ["Android", "iOS", "Windows", "MacOS", "Amazon FireOS"],
        series: [39243, 22187, 6947, 3375, 2688],
    };

    let chartRef: HTMLDivElement | null = null;
    onMount(async () => {
        const ApexCharts = (await import("apexcharts")).default;

        if (chartRef) {
            new ApexCharts(chartRef, chartOptions).render();
        }
    });
</script>

<div bind:this={chartRef}></div>
