<script lang="ts" module>
    import type { IChatItem } from "./ChatItem.svelte";

    type IChatList = {
        chats: IChatItem[];
        selected: IChatItem;
        selectChat(chat: IChatItem): void;
    };
</script>

<script lang="ts">
    import SimpleBar from "simplebar";
    import ChatItem from "./ChatItem.svelte";

    let { chats, selected, selectChat }: IChatList = $props();

    let chatListRef: HTMLDivElement | null = null;

    $effect(() => {
        if (chatListRef) {
            new SimpleBar(chatListRef);
        }
    });
</script>

<div class="card bg-base-100 shadow">
    <div class="card-body">
        <div class="flex items-center justify-between gap-3">
            <label class="input">
                <span class="iconify lucide--search text-base-content/80 size-4"></span>
                <input aria-label="Search chat" class="grow" placeholder="Search along chats" type="search" />
            </label>
            <div class="tooltip" data-tip="New Contact">
                <button aria-label="Add New Contact" class="btn btn-outline btn-square border-base-300">
                    <span class="iconify lucide--plus size-4"></span>
                </button>
            </div>
        </div>

        <div class="h-[calc(100vh_-_306px)]" bind:this={chatListRef}>
            <div class="mt-4">
                {#each chats as chat, index (index)}
                    <div onclick={() => selectChat(chat)}>
                        <ChatItem {...chat} selected={selected?.id === chat.id} />
                    </div>
                {/each}
            </div>
        </div>

        <div class="mt-3 text-center">
            <button class="btn btn-soft btn-primary btn-sm">
                <span class="iconify lucide--user-plus size-3.5"></span>
                Join a Community
            </button>
        </div>
    </div>
</div>
