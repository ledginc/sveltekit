<script lang="ts">
  import type { ProcessInputPropertiesScaffolding } from "$lib/processScaffolding";
  import { onMount } from "svelte";

  let {properties, value = $bindable(), requiredFault}: {properties: ProcessInputPropertiesScaffolding, value: any, requiredFault: boolean} = $props();

  // svelte-ignore non_reactive_update
  let inputElement: HTMLInputElement;

  function initMap() {
    if (properties.subtype === "address") {
      const options = {
        strictBounds: false
      }
      //@ts-ignore
      const autocomplete = new google.maps.places.Autocomplete(inputElement, options);

      autocomplete.addListener("place_changed", () => {
        const place = autocomplete.getPlace();
        value = place.formatted_address;
      });
    }
  }
  onMount(() => {
    initMap();
  });
</script>

{#snippet input(type: string)}
 {#if type === "text"}
    <input type="text" class="input input-bordered w-full max-w-xs rounded-md" defaultValue={properties.defaultValue} bind:value={value} />
  {/if}
  {#if type === "address"}
    <input type="text" class="input input-bordered w-full max-w-xs rounded-md" placeholder="Entrez une adresse" defaultValue={properties.defaultValue} bind:value={value} bind:this={inputElement} />
  {/if}
{/snippet}

<div class=" min-w-96 flex justify-center items-center">
  <label class="form-control w-full max-w-xs">
      <div class="label">
        <div class="tooltip" data-tip={properties.description}>
        <span class="label-text">{properties.label}</span>
        </div>
      </div>
      {#if requiredFault}
        <div class="indicator w-full max-w-xs rounded-md">
          <span class="indicator-item badge badge-error">Obligatoire</span>
          {@render input(properties.subtype)}
        </div>
      {:else}
        {@render input(properties.subtype)}
      {/if}
</label>
</div>