<script lang="ts">
  import { onMount } from "svelte";
  import { getSvgByName } from "$lib/Icons";

    let { icon, width, height} = $props();
    let svg: string | undefined = $state();

    onMount(() => {
        svg = getSvgByName(icon, true)
    })
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<div class="flex items-center justify-evenly relative rounded" style={`width: ${width}; height: ${height}`}>
    <div class="icon">
        {@html svg}
    </div>
    <button></button>
</div>

<style>
    .icon {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    button {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      background: transparent;
      border: none;
      cursor: pointer;
      transition: background-color 0.3s ease, box-shadow 0.3s ease;
    }
    button:hover {
      background-color: rgba(0, 0, 0, 0.05);
    }
  </style>