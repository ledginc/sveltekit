<script lang="ts" module>
    export type IStatItem = {
        image: string;
        name: string;
        used: number;
        total: number;
        progressClass: string;
    };
</script>

<script lang="ts">
    let { image, name, used, total, progressClass }: IStatItem = $props();
</script>

<div class="card bg-base-100 cursor-pointer shadow transition-all hover:shadow-md">
    <div class="card-body p-4">
        <div class="bg-base-200 rounded-box w-fit p-2">
            <img src={image} class="size-6" alt="" />
        </div>
        <div class="mt-3 flex items-center justify-between">
            <p class="text-sm font-medium">{name}</p>
            <span class="text-base-content/80 text-xs">{(used * 100) / total}%</span>
        </div>
        <progress max={total} value={used} class={`progress ${progressClass} mt-1.5 h-1.5`}></progress>
        <div class="mt-1.5 flex items-center justify-between">
            <span class="text-sm font-medium">{used} GB</span>
            <span class="text-base-content/80 text-xs">{total} GB</span>
        </div>
    </div>
</div>
