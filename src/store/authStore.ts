import { writable } from "svelte/store";
import type { User } from 'firebase/auth'

const authStore = writable<{
  isLoading: boolean;
  isLoggedIn: boolean;
  user?: User | null;
  firebaseControlled: boolean;
}>({
  isLoading: true,
  isLoggedIn: false,
  firebaseControlled: false,
});

export default authStore;

// export default {
//   subscribe: authStore.subscribe,
//   set: authStore.set,
// };