<script lang="ts">
	import { createEventDispatcher } from "svelte";


  let inputElement : HTMLElement;
  let buttonElement : HTMLElement;
  let file : Blob;
  let previewShow: boolean = false;
  let imagePreview: string;

  const dispatch = createEventDispatcher();

  function fileClick () {
    inputElement.click();
  }

  function onchangeFile(e: any) {
    const files = e.target.files;
    if(files && files[0]) {
      if(files[0].size > 100000) {
        window.alert('file size must be less than 100kb')
      } else {
        file = files[0]
        let blobUrl = window.URL.createObjectURL(file);
        imagePreview = blobUrl
        previewShow = true;

        dispatch('fileSelected', {
          selectedFile : file
        })
      }
    }
  }

</script>


<input 
  type="file" 
  id="fileInput" 
  bind:this={inputElement}
  name="file" 
  accept="image/*, .png, .jpeg" 
  on:change={onchangeFile}
>
<button id="fileInputButton" on:click={fileClick} bind:this={buttonElement}>ファイルを読み込む</button>
{#if previewShow}
  <p><img src={imagePreview} alt="preview" width="400px" style="max-height: 400px;"/></p>
{/if}



<style>
  #fileInput{
    display: none;
  }
  #fileInputButton{
    padding: 4px 8px;
    border: none;
    background-color: #4CAF50;
    color: #fff;
  }
  #fileInputButton:hover{
    background-color: #3b8a3f;
  }
</style>