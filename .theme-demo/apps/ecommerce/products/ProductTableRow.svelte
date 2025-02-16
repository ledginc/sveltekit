<script lang="ts" module>
    export type IProductTableRow = {
        id: number;
        image: string;
        name: string;
        sku: string;
        category: string;
        price: number;
        ratings: number;
        ratingsCount: number;
        stock: number;
        createdAt: string;
        orders: number;
    };
</script>

<script lang="ts">
    const { id, image, name, sku, category, price, ratings, ratingsCount, orders, stock, createdAt }: IProductTableRow =
        $props();
</script>

<tr class="hover:bg-base-200/40 cursor-pointer *:text-nowrap">
    <th>
        <input aria-label="Single check" type="checkbox" class="checkbox checkbox-sm" />
    </th>
    <td>{id}</td>
    <td>
        <div class="flex items-center space-x-3 truncate">
            <img alt="Product" class="rounded-box size-10" src={image} />
            <div>
                <p class="font-medium">{name}</p>
                <p class="text-base-content/60 text-xs">#{sku}</p>
            </div>
        </div>
    </td>
    <td>{category}</td>
    <td class="text-sm font-medium">${price}</td>
    <td>
        <div class="flex items-center gap-2">
            <span
                class={`iconify lucide--star text-success size-4 ${ratings > 4 ? "text-success" : ratings > 3 ? "text-warning" : "textarea-error"}`}
            ></span>
            {ratings}
            <span class="text-base-content/60 text-xs">({ratingsCount})</span>
        </div>
    </td>
    <td>{orders}</td>
    <td>
        {#if stock > 10}
            <span class="text-success">Available</span>
        {:else if stock > 0}
            <span class="text-warning">Low</span>
        {:else}
            <span class="textarea-error">Out of stock</span>
        {/if}
    </td>
    <td class="text-sm">{createdAt}</td>
    <td>
        <div class="inline-flex">
            <a
                aria-label="Edit product link"
                class="btn btn-square btn-ghost btn-sm"
                href={`/apps/ecommerce/products/${id}`}>
                <span class="iconify lucide--pencil text-base-content/80 size-4"></span>
            </a>
            <button aria-label="Dummy show product" class="btn btn-square btn-ghost btn-sm">
                <span class="iconify lucide--eye text-base-content/80 size-4"></span>
            </button>
            <button
                aria-label="Dummy delete product"
                class="btn btn-square btn-error btn-outline btn-sm border-transparent"
                onclick={() => document.querySelector<HTMLDialogElement>("#apps-product-delete")?.showModal()}>
                <span class="iconify lucide--trash size-4"></span>
            </button>
        </div>
    </td>
</tr>
