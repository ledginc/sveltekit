<script lang="ts">
    import OrderItemsTableRow, { type IOrderItemsTableRow } from "./OrderItemsTableRow.svelte";

    const orderItems: IOrderItemsTableRow[] = [
        {
            id: 1001,
            image: "/images/apps/ecommerce/products/1.jpg",
            name: "Men's tracking shoes",
            sku: "SHOES",
            category: "Fashion",
            price: 29,
            quantity: 3,
            totalAmount: 87,
        },
        {
            id: 1002,
            image: "/images/apps/ecommerce/products/2.jpg",
            name: "Coco body oil",
            sku: "COCOOIL",
            category: "Daily Need",
            price: 16,
            quantity: 2,
            totalAmount: 32,
        },
        {
            id: 1003,
            image: "/images/apps/ecommerce/products/3.jpg",
            name: "Freeze air",
            sku: "FREEAIR",
            category: "Cosmetic",
            price: 32,
            quantity: 4,
            totalAmount: 128,
        },
    ];
</script>

<div class="card card-border bg-base-100">
    <div class="card-body p-0">
        <div class="px-5 pt-5">
            <div class="flex justify-between">
                <div class="space-x-2">
                    <span class="text-2xl font-medium">#1</span>
                    <span class="text-base-content/70 hidden text-sm sm:inline"> 27 Dec 2024 at 05:26 PM </span>
                </div>
                <button class="btn btn-sm btn-outline border-base-300">
                    <span class="iconify lucide--scroll-text size-3.5"></span>
                    Invoice
                </button>
            </div>
        </div>
        <div class="mt-5 overflow-auto">
            <table class="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                    </tr>
                </thead>

                <tbody>
                    {#each orderItems as orderItem, index (index)}
                        <OrderItemsTableRow {...orderItem} />
                    {/each}
                    <tr class="font-medium">
                        <td colSpan={5} class="text-end"> Sub Total </td>
                        <td>$247</td>
                    </tr>
                    <tr class="font-medium">
                        <td colSpan={5} class="text-end"> Tax </td>
                        <td>+ $44</td>
                    </tr>
                    <tr class="text-success font-medium">
                        <td colSpan={5} class="text-end"> Discount </td>
                        <td class="text-success">- $60</td>
                    </tr>
                    <tr class="text-lg">
                        <td colSpan={5} class="text-end font-medium"> Total </td>
                        <td class="font-semibold">$231</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>
