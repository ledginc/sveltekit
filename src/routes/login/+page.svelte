<script lang="ts">
    import { onMount } from 'svelte';
    import type { PageData } from './$types';


    let { data }: { data: PageData } = $props();

    let websocketConnection: WebSocket | null = null;

    function sendMessage(message: string) {
      const data = JSON.stringify({
          data: {message: message},
        });
      if (websocketConnection) {
        websocketConnection.send(data);
      }
    }

    onMount(() => {
      websocketConnection = new WebSocket('ws://192.99.38.163:4000/ws/penis');
      if (websocketConnection) {
        websocketConnection.addEventListener("open", (event: any) => {
          console.log('WebSocket connection opened:', event);
        });
        websocketConnection.addEventListener("message", (event: any) => {
          console.log("message : ", event.data)
        })
      }
      
    });
</script>

<button class="btn btn-primary" onclick={() => {sendMessage("kjhsdaf")}}>Login</button>