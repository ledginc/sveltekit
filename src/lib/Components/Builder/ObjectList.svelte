<script lang="ts">
  import { BuilderObjects, type BuilderCardObject } from '$lib/Constants/BuilderCardObjects';
  import { onMount } from 'svelte';

  let { currentSection }: { currentSection: number } = $props();

  let inputs = BuilderObjects.filter((object) => object.category === 'input');
  let conditions = BuilderObjects.filter((object) => object.category === 'condition');

  onMount(() => {
    const draggableElements = document.querySelectorAll('[data-draggable="true"]');

    draggableElements.forEach((element) => {
      const divElement = element as HTMLDivElement;
      divElement.addEventListener('dragstart', (e: DragEvent) => {
        if (e.dataTransfer) {
          const data = divElement.dataset.objecttype + "/" + divElement.dataset.type || "";
          e.dataTransfer.setData('text/plain', data);
        }
      });
    });
  });

</script>

{#snippet card(object: BuilderCardObject)}
  <div class="bg-base-100 shadow-md w-5/12 h-12 p-1 cursor-grab rounded-md" draggable="true" data-draggable="true" data-objecttype={object.category} data-type={object.type}>
      <div class="flex flex-start gap-2 w-full items-center h-full ">
        {@html object.icon}
        <h1 class="text-lg font-semibold">
            {object.labelFR}
        </h1>
      </div>
      <button aria-label="Click to add" onclick={() => {}}></button>
  </div>

{/snippet}

<div class="flex flex-col w-1/5 border-r h-dvh items-center">
  <h1>Entrée de données</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each inputs as input}
        {@render card(input)}
    {/each}
  </div>
  <div class="divider m-3"></div>
  <h1>Conditions</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each conditions as condition}
        {@render card(condition)}
    {/each}
  </div>
</div>
