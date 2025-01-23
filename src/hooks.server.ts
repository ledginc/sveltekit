import type { Handle } from '@sveltejs/kit';


export const handle: Handle = async ({ event, resolve }) => {
	if (!event.url.pathname.startsWith('/')) {
	    return await resolve(event);
	} else {  
    return await resolve(event);
  }
};