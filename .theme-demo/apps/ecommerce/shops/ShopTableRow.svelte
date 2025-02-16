<script lang="ts" module>
    export type IShopTableRow = {
        id: number;
        name: string;
        date: string;
        sellerId: number;
        sellerName: string;
        email: string;
        mobileNumber: string;
        verified: boolean;
        ratings: number;
        ratingsCount: number;
        orders: number;
        earning: number;
    };
</script>

<script lang="ts">
    const {
        id,
        name,
        date,
        email,
        earning,
        verified,
        ratings,
        ratingsCount,
        orders,
        sellerName,
        mobileNumber,
    }: IShopTableRow = $props();
</script>

<tr class="hover:bg-base-200/40 cursor-pointer *:text-nowrap">
    <th>
        <input aria-label="Single check" type="checkbox" data-slot="single-checkbox" class="checkbox checkbox-sm" />
    </th>
    <td class="font-medium">{id}</td>
    <td class="font-medium">{name}</td>
    <td>{sellerName}</td>
    <td>{email}</td>
    <td>{mobileNumber}</td>
    <td>{orders}</td>
    <td>
        <div class="flex items-center gap-1">
            <span
                class={`iconify lucide--star text-success size-4 ${ratings > 4 ? "text-success" : ratings > 3 ? "text-warning" : "textarea-error"}`}
            ></span>
            {ratings}
            <span class="text-base-content/80 text-xs">({ratingsCount})</span>
        </div>
    </td>
    <td>
        <div class="text-sm font-medium">${earning}</div>
    </td>
    <td>
        {#if verified}
            <span class="iconify lucide--badge-check text-success size-4.5"></span>
        {:else}
            <span class="iconify lucide--badge-x text-error size-4.5"></span>
        {/if}
    </td>
    <td class="text-sm">{date}</td>
    <td>
        <div class="inline-flex w-fit">
            <a
                aria-label="Edit customer link"
                class="btn btn-square btn-ghost btn-sm"
                href={`/apps/ecommerce/shops/${id}`}>
                <span class="iconify lucide--pencil text-base-content/80 size-4"></span>
            </a>
            <button aria-label="Dummy show shop" class="btn btn-square btn-ghost btn-sm">
                <span class="iconify lucide--eye text-base-content/80 size-4"></span>
            </button>
            <button
                aria-label="Dummy delete shop"
                class="btn btn-square btn-error btn-outline btn-sm border-transparent"
                onclick={() => document.querySelector<HTMLDialogElement>("#apps-shop-delete")?.showModal()}>
                <span class="iconify lucide--trash size-4"></span>
            </button>
        </div>
    </td>
</tr>
