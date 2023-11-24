/** @type {import('./$types').LayoutLoad} */

import { initializeFirebase, auth } from '$lib/firebase';
import { browser } from '$app/environment';
import { onAuthStateChanged } from 'firebase/auth';

export const prerender = true;
export const trailingSlash = 'always';
export const ssr = false;

export async function load({ url }) {
  if (browser) {
   try {
    initializeFirebase();
   } catch (ex) {
    console.error(ex);
   }
  }
 
  function getAuthUser() {
   return new Promise((resolve) => {
    onAuthStateChanged(auth, (user) => resolve(user ? user : false));
   });
  }
 
  return {
   getAuthUser: getAuthUser,
   url: url.pathname
  };
 }