<script lang="ts" module>
    import type { IChatInput } from "./ChatInput.svelte";
    import type { IChatItem } from "./ChatItem.svelte";

    type IChatMessageList = {
        chat: IChatItem;
    } & IChatInput;
</script>

<script lang="ts">
    import SimpleBar from "simplebar";
    import ChatCallModal from "./ChatCallModal.svelte";
    import ChatInput from "./ChatInput.svelte";
    import ChatMessageItem from "./ChatMessageItem.svelte";

    let { chat, onSendMessage }: IChatMessageList = $props();

    let messagesListRef: HTMLDivElement | null = null;
    let simeplarBarRef: SimpleBar | null = null;

    $effect(() => {
        if (messagesListRef) {
            simeplarBarRef = new SimpleBar(messagesListRef);
        }
    });

    $effect(() => {
        if (simeplarBarRef && chat) {
            const scrollE = simeplarBarRef.getScrollElement();
            if (scrollE) scrollE.scrollTo({ top: scrollE.scrollHeight, behavior: "smooth" });
        }
    });
</script>

<div class="card bg-base-100 shadow">
    <div class="flex items-center gap-3 px-4 py-3">
        <img src={chat.image} class="size-10 max-sm:size-8" alt="avatar" />
        <div class="mt-1.5 grow">
            <p class="leading-none font-medium max-sm:text-sm">{chat.name}</p>
            <div class="mt-0.5 flex items-center gap-2">
                <div class="status status-success"></div>
                <p class="text-base-content/80 text-xs">Active</p>
            </div>
        </div>
        <div class="tooltip" data-tip="Audio Call">
            <button
                class="btn btn-outline border-base-300 btn-square btn-sm"
                aria-label="Audio Call"
                onclick={() => document.querySelector<HTMLDialogElement>("#apps-chat-call-modal")?.showModal()}>
                <span class="iconify lucide--phone size-4"></span>
            </button>
        </div>
        <div class="tooltip max-sm:hidden" data-tip="Video Call">
            <button class="btn btn-outline border-base-300 btn-square btn-sm" aria-label="Video Call">
                <span class="iconify lucide--video size-4"></span>
            </button>
        </div>
        <div class="tooltip max-sm:hidden" data-tip="Add to Friend">
            <button class="btn btn-outline border-base-300 btn-square btn-sm" aria-label="Add to Friend">
                <span class="iconify lucide--user-plus size-4"></span>
            </button>
        </div>
        <div class="dropdown dropdown-bottom dropdown-end">
            <div
                tabIndex={0}
                role="button"
                class="btn btn-outline btn-square btn-sm border-base-300"
                aria-label="More options">
                <span class="iconify lucide--more-vertical size-4"></span>
            </div>
            <div tabIndex={0} class="dropdown-content bg-base-100 rounded-box mt-2 w-52 shadow">
                <ul class="menu w-full p-2">
                    <li>
                        <div>
                            <span class="iconify lucide--square-user size-4"></span>
                            View Profile
                        </div>
                    </li>

                    <li>
                        <div>
                            <span class="iconify lucide--pin size-4"></span>
                            Pin
                        </div>
                    </li>
                    <li>
                        <div>
                            <span class="iconify lucide--bell-dot size-4"></span>
                            Mute Notification
                        </div>
                    </li>
                </ul>
                <hr class="border-base-300" />
                <ul class="menu w-full p-2">
                    <li>
                        <div>
                            <span class="iconify lucide--archive size-4"></span>
                            Archive
                        </div>
                    </li>
                    <li class="">
                        <div class="text-error hover:bg-error/10">
                            <span class="iconify lucide--trash size-4"></span>
                            Delete Chat
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    <hr class="border-base-300" />
    <div class="h-[calc(100vh_-_320px)] p-5" bind:this={messagesListRef}>
        {#each chat.messages as message, index (index)}
            <ChatMessageItem {chat} {message} />
        {/each}
    </div>
    <ChatInput {onSendMessage} />
    <ChatCallModal {chat} />
</div>
