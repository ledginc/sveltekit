<script lang="ts">
  import { onMount } from "svelte";
  import { getSvgByName } from "$lib/Icons";

    let { icon, width, height, children } = $props();
    let svg: string | undefined = $state();

    onMount(() => {
        svg = getSvgByName(icon)
    })
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<div class="main" style={`width: ${width}; height: ${height}`}>
    <div class="icon">
        {@html svg}
    </div>
    <div class="text">
        {@render children?.()}
    </div>
    <button></button>
</div>

<style>
    .main {
      display: flex;
      align-items: center;
      justify-content: space-evenly;
      position: relative;
      border-radius: 5px;
    }
    .icon {
      width: 1/3;
    }
    .text {
      width: 2/3;
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