import { redirect, type Handle } from "@sveltejs/kit";
import jwt from 'jsonwebtoken';
import { SECRET_KEY } from "$env/static/private";

export const handle: Handle = async ({ event, resolve }) => {
  const accessToken = event.cookies.get("access_token");
  console.log("Cookies:", event.cookies.getAll());
  console.log("Access token:", accessToken);
  if (event.route.id && event.route.id.indexOf("(protected)") > 0) {
    

    if (!accessToken) {
      console.log("Access token not found");
      throw redirect(302, '/auth/login');
    }

    try {
      jwt.verify(accessToken, SECRET_KEY);
      console.log("Access token is valid");
    } catch (err) {
      console.error("Invalid access token:", err);
      throw redirect(302, '/auth/login');
    }
  }
  console.log("not protected route");
  return await resolve(event);
};