<script lang="ts">
  import type { ProcessIntegrationPropertiesScaffolding } from "$lib/processScaffolding";
  import { onMount } from "svelte";


  let { properties }: {properties: ProcessIntegrationPropertiesScaffolding} = $props();

  let streetViewElement: HTMLDivElement;

  let place = { lat: 45.5017, lng: -73.5673 };

  onMount(() => {
    //@ts-ignore
    const streetView = new google.maps.StreetViewPanorama(streetViewElement, {
      position: place,
      pov: { heading: 165, pitch: 0 },
      zoom: 1,
    });
  });
</script>

<main class="w-auto h-auto">
  {#if properties.subtype === "gmap_streetview"}
    <div class="street-view rounded-md" bind:this={streetViewElement}></div>
  {/if}
</main>

<style>
  .street-view {
    width: 60dvw;
    height: 60dvh;
  }
</style>