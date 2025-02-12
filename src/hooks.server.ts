import { websocketConnection } from '$lib/Websocket/index.svelte';
import { redirect, type Handle } from '@sveltejs/kit';
import { get } from 'svelte/store';


export const handle: Handle = async ({ event, resolve }) => {

  // const ws = get(websocketConnection);

	// if (event.url.pathname.startsWith('/login')) {
	//     return await resolve(event);
	// } else {  
  //   if (ws) {
  //     return await resolve(event);
  //   } else {
  //     redirect(302, "/login")
  //   }
  // }

  return await resolve(event);
};