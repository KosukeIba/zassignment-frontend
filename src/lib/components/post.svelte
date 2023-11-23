<script lang="ts">
	import { fade } from "svelte/transition";
	import { onMount } from "svelte";
	import { auth, initializeFirebase } from "$lib/firebase";
	import CommonButton from "./commonButton.svelte";
	
  let file: Blob;
  let modalShow : boolean = false;
  let photoText : string = '';
  let ownerId: string = '';

  onMount(async() => {
    await initializeFirebase();
    if(auth.currentUser) {
      ownerId = auth.currentUser.uid
    }
    
  })

  const open = () => {
    modalShow = true;
  }
  const close = () => {
    modalShow = false;
  };

  function fileSet (event: { detail: { selectedFile: Blob; }; }) {
    file = event.detail.selectedFile;
    console.log(file.size)
  }

  async function uploadFile() {
    const formdata = new FormData();
    formdata.append("file", file);
    formdata.append("description", photoText);
    formdata.append("ownerId", ownerId);
    
    const formResponse = await fetch("https://data-honor-403613.an.r.appspot.com/upload", {
      method: "POST",
      body: formdata
    });

    photoText = 'text';
    modalShow = false

    console.log(await formResponse.json())
  }
</script>

<CommonButton name="post" on:commonButtonClicked={open}></CommonButton>
{#if modalShow}

<div class="postModal--base" transition:fade={{duration: 200}}>
  <div class="postModal--overlay" on:click={close} />
  <form class="postModal--content">
    <p><textarea bind:value={photoText}/></p>
    <button on:click={uploadFile}>upload</button>
  </form>
</div>

{/if}

<style>
  .postModal--base {
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
  }
  .postModal--overlay {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: gray;
    opacity: 0.5;
  }
  .postModal--content {
    position: absolute;
    padding: 50px;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    text-align: center;
  }
  .postModal--content textarea {
    width: 30vw;
    font-size: x-large;
    height: 20vh;
    resize: none;
    border: 2px solid #cccccc;
    border-radius: 5px;
    font-size: 20px;
  }
  .postModal--content textarea:focus {
    border:2px solid #4CAF50;
    outline:0;
  }
  
</style>