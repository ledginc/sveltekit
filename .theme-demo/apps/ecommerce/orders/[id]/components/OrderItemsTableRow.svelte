<script lang="ts" module>
    export type IOrderItemsTableRow = {
        id: number;
        image: string;
        name: string;
        category: string;
        sku: string;
        price: number;
        quantity: number;
        totalAmount: number;
    };
</script>

<script lang="ts">
    const { id, image, name, category, price, quantity, sku, totalAmount }: IOrderItemsTableRow = $props();
</script>

<tr>
    <th class="font-medium">{id}</th>
    <td>
        <div class="flex items-center space-x-3 truncate">
            <img alt="Product" class="size-10 rounded" src={image} />
            <div>
                <p class="font-medium">{name}</p>
                <p class="text-base-content/60 text-xs">#{sku}</p>
            </div>
        </div>
    </td>
    <td>{category}</td>
    <td>${price}</td>
    <td>{quantity}x</td>
    <td class="font-medium">${totalAmount}</td>
</tr>
