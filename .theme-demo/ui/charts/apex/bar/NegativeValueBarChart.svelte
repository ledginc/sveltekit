<script lang="ts">
    import { type ApexOptions } from "apexcharts";
    import { onMount } from "svelte";

    const chartOptions: ApexOptions = {
        xaxis: {
            categories: [
                "Smart Watches",
                "Wireless Headphones",
                "Earbuds",
                "Wired Earphones",
                "Speakers",
                "Soundbars",
                "Personalised Products",
                "Accessories",
            ],
            title: {
                text: "Product Review Sentiment",
                style: { fontWeight: "500" },
            },
            labels: {
                formatter: (value) => Math.abs(Number(value)).toString(),
            },
        },
        dataLabels: {
            formatter: (value) => Math.abs(Number(value)).toString(),
        },
        tooltip: {
            shared: false,
            y: {
                formatter: (val) => Math.abs(val).toString() + " Reviews",
            },
        },
        grid: {
            show: false,
        },
        chart: {
            type: "bar",
            height: 380,
            toolbar: {
                show: true,
            },
            background: "transparent",
            stacked: true,
        },
        colors: ["#167bff", "#FDA403"],
        fill: {
            type: "solid",
        },
        plotOptions: {
            bar: {
                horizontal: true,
                barHeight: 28,
            },
        },
        series: [
            {
                name: "Positive",
                data: [379, 293, 411, 387, 242, 434, 321, 357],
            },
            {
                name: "Negative",
                data: [151, 208, 90, 113, 268, 76, 189, 88].map((value) => -value),
            },
        ],
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
