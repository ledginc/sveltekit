<script lang="ts">
    import { type ApexOptions } from "apexcharts";
    import { onMount } from "svelte";

    const chartOptions: ApexOptions = {
        chart: {
            height: 380,
            type: "pie",
            toolbar: {
                show: false,
            },
            background: "transparent",
        },
        stroke: {
            show: true,
            width: 1,
            colors: ["var(--color-base-100)"],
        },
        title: {
            text: "Website Traffic",
            style: { fontWeight: "500" },
            align: "right",
        },
        tooltip: {
            enabled: true,
            y: {
                formatter: (value) => value + " Visitors",
            },
        },
        labels: ["Search", "Direct", "Referral", "Social", "Webinars", "Advertisement"],
        colors: ["#167bff", "#FDA403", "#FB6D48", "#A25772", "#8E7AB5", "#FFA299"],
        series: [428, 180, 88, 209, 91, 52],
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
