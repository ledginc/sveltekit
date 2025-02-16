<script lang="ts">
    import StatItem, { type IStatItem } from "./StatItem.svelte";

    const statItems: IStatItem[] = [
        {
            title: "Customers",
            amount: "4,235",
            percent: 8.04,
            icon: "lucide--users",
        },
        {
            title: "Revenue",
            amount: "$75,400",
            percent: 15.3,
            icon: "lucide--dollar-sign",
        },
        {
            title: "Closed Deals",
            amount: "574",
            percent: -2.4,
            icon: "lucide--handshake",
        },
        {
            title: "Satisfaction",
            amount: "93%",
            percent: 2.3,
            icon: "lucide--smile",
        },
    ];

    let selected = $state(statItems[1]);
</script>

<div class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-1">
    {#each statItems as stat, index (index)}
        <div class="cursor-pointer" onclick={() => (selected = stat)}>
            <StatItem {...stat} selected={selected.title === stat.title} />
        </div>
    {/each}
</div>
