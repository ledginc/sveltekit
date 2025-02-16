<script lang="ts" module>
    export type IChatMessageItem = {
        message: string;
        sendAt: string;
        sender: "me" | "other";
    };
</script>

<script lang="ts">
    import type { IChatItem } from "./ChatItem.svelte";

    let { chat, message }: { chat: IChatItem; message: IChatMessageItem } = $props();
</script>

<div>
    <div class={`chat ${message.sender === "me" ? "chat-end" : "chat-start"}`}>
        <div class="chat-image avatar">
            <div class="w-10">
                <img
                    src={message.sender === "me" ? "/images/avatars/1.png" : chat.image}
                    class="mask mask-squircle bg-base-200 p-0.5"
                    alt="Tailwind CSS chat bubble component" />
            </div>
        </div>
        <div class="chat-bubble bg-base-200 text-sm">{message.message}</div>
        <div class="chat-footer text-base-content/60">{message.sendAt}</div>
    </div>
</div>
