<script lang="ts">
	import { onMount } from 'svelte';
	import authStore from '../../store/authStore';


  import type { LayoutData } from './$types';
	import { goto } from '$app/navigation';
  export let data: LayoutData;

  let loading: boolean = true;
  let loggedIn: boolean = false;

  authStore.subscribe((cur: any) => {
    loading = cur?.isLoading;
    loggedIn = cur?.isLoggedIn;
  });

  onMount(async () => {
    const user: any = await data.getAuthUser();

    const loggedIn = !!user // && user?.emailVerified;
    authStore.set({
      isLoading: loading,
      isLoggedIn: loggedIn,
      user: user,
      firebaseControlled: false,
    })

    console.log(authStore)

    if (!loggedIn) {
      goto('/')
    }
  })

</script>

{#if !loading}
<div style="background-color: white; width:100vw; height:100vh; z-index:999"></div>
{/if}

<style>
  div {
    background-color: white;
    width: 100vw;
    height: 100vh;
    z-index: 999;
    position: absolute;
  }
</style>

<slot />
