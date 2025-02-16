<script lang="ts" module>
    export type ICustomerDealTableRow = {
        image: string;
        name: string;
        date: string;
        status: "completed" | "canceled" | "pending";
        value: string;
    };
</script>

<script lang="ts">
    let { date, status, name, image, value }: ICustomerDealTableRow = $props();
</script>

<tr>
    <td class="flex items-center space-x-3 truncate">
        <img alt="Order" class="mask mask-squircle bg-base-200 size-7" src={image} />
        <p>{name}</p>
    </td>
    <td class="font-medium">${value}</td>
    <td>
        {#if status === "completed"}
            <div class="badge badge-success badge-sm badge-soft">Completed</div>
        {:else if status === "canceled"}
            <div class="badge badge-error badge-sm badge-soft">Canceled</div>
        {:else if status === "pending"}
            <div class="badge badge-secondary badge-sm badge-soft">Pending</div>
        {/if}
    </td>
    <td class="text-base-content/80 text-sm">{date}</td>
    <td>
        <button aria-label="Show product" class="btn btn-square btn-ghost btn-xs">
            <span class="iconify lucide--eye text-base-content/80 size-4"></span>
        </button>
    </td>
</tr>
