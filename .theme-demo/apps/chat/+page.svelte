<script lang="ts">
    import PageTitle from "$lib/components/PageTitle.svelte";
    import ChatList from "./(components)/ChatList.svelte";
    import ChatMessageList from "./(components)/ChatMessageList.svelte";
    import { chatsData } from "./data.js";

    let selectedChat = $state(chatsData[0]);

    const onSubmit = (message: string) => {
        if (selectedChat) {
            selectedChat.messages.push({
                message,
                sendAt: "05:59 PM",
                sender: "me",
            });
        }
    };
</script>

<PageTitle title="Chat" items={[{ label: "Apps" }, { label: "Chat", active: true }]} />
<div class="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-12">
    <div class="lg:col-span-5 xl:col-span-4 2xl:col-span-3">
        <ChatList chats={chatsData} selected={selectedChat} selectChat={(chat) => (selectedChat = chat)} />
    </div>
    <div class="lg:col-span-7 xl:col-span-8 2xl:col-span-9">
        <ChatMessageList onSendMessage={onSubmit} chat={selectedChat} />
    </div>
</div>
