<script lang="ts" module>
    import type { IChatMessageItem } from "./ChatMessageItem.svelte";

    export type IChatItem = {
        id: number;
        image: string;
        name: string;
        messages: IChatMessageItem[];
        unreadCount?: number;
    };
</script>

<script lang="ts">
    let { image, name, messages, unreadCount, selected }: IChatItem & { selected: boolean } = $props();
    const lastMessage = messages.length > 0 ? messages[messages.length - 1] : null;
</script>

<div
    class={`rounded-box hover:bg-base-200 my-0.5 flex cursor-pointer items-center gap-3 p-2 px-3 transition-all ${selected && "bg-base-200"}`}>
    <img src={image} class="bg-base-200 mask mask-squircle size-11 p-0.5" alt="avatar" />
    <div class="grow">
        <div class="flex justify-between">
            <p class="text-sm font-medium">{name}</p>
            <span class="text-base-content/60 text-xs">{lastMessage?.sendAt ?? "-"}</span>
        </div>
        <div class="flex justify-between gap-3">
            <p class="text-base-content/80 line-clamp-1 text-sm">
                {lastMessage?.message ?? "Tap to message"}
            </p>
            {#if unreadCount && unreadCount !== 0}
                <div class="badge badge-xs badge-success px-1 py-1.5 text-xs">{unreadCount}</div>
            {/if}
        </div>
    </div>
</div>
