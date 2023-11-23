<script lang="ts">
	import { createEventDispatcher } from "svelte";

  export let name : String;
  const dispatch = createEventDispatcher();

  export let buttonClicked = () => dispatch("commonButtonClicked");
</script>

<button class="commonButton" on:click={buttonClicked}>{name}</button>

<style>
  button {
    padding: 0;
    font-family: inherit;
    appearance: none;
    cursor: pointer;
    background-color: transparent;
    border: none;
  }
  .commonButton {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 80px;
    aspect-ratio: 1;
    color: rgb(66, 66, 66);
    background-color: #efefef;
    border-radius: 50%;
    border-color: rgb(18, 51, 40);
    box-shadow: -4px -4px 8px #fff, 4px 4px 8px rgba(0, 0, 0, 0.24);
  }
  @media (any-hover: hover) {
    .commonButton {
      transition: box-shadow 0.2s;
    }

    .commonButton:hover {
      box-shadow: -2px -2px 4px #fff, 2px 2px 4px rgb(0 0 0 / 24%);
    }

    .commonButton:active {
      background-color: #ebebeb;
      box-shadow: inset 4px 4px 8px rgb(0 0 0 / 16%);
    }
  }
</style>