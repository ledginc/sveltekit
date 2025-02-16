<script lang="ts">
  import { BuilderObjects, type BuilderCardObject, type BuilderObjectsList, } from '$lib/constants/BuilderCardObjects';
  import { onMount } from 'svelte';

  const listObjects: BuilderObjectsList = BuilderObjects;


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
  <div class="bg-base-100 shadow-md w-5/12 h-12 p-1 cursor-grab" draggable="true" data-draggable="true" data-objecttype={object.category} data-type={object.type}>
      <div class="flex flex-start gap-2 w-full items-center h-full ">
        {@html object.icon}
        <h1 class="text-lg font-semibold">
            {object.labelFR}
        </h1>
      </div>
      <button aria-label="Click to add" onclick={() => {}}></button>
  </div>

{/snippet}

<div class="flex flex-col w-1/5 border-r h-dvh max-h-dvh overflow-y-auto items-center min-w-80">
  <h1 class="text-lg font-semibold mt-3">Liste d'objets</h1>
  <div class="divider mr-3 ml-3 mb-0"></div>
  <h1 class="text-lg">Entrée de données</h1>
  <div class="flex flex-wrap w-full gap-2 justify-evenly">
    {#each listObjects.input as input}
        {@render card(input)}
    {/each}
  </div>
  <div class="divider mr-3 ml-3 mb-0"></div>
  <h1 class="text-lg">Math</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each listObjects.math as math}
        {@render card(math)}
    {/each}
  </div>
  <div class="divider mr-3 ml-3 mb-0"></div>
  <h1 class="text-lg">Conditions</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each listObjects.condition as condition}
        {@render card(condition)}
    {/each}
  </div>
  <div class="divider mr-3 ml-3 mb-0"></div>
  <h1 class="text-lg">Logique</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each listObjects.logic as logic}
        {@render card(logic)}
    {/each}
  </div>
  <div class="divider mr-3 ml-3 mb-0"></div>
  <h1 class="text-lg">Intégration</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each listObjects.integration as integration}
        {@render card(integration)}
    {/each}
  </div>
  <div class="divider mr-3 ml-3 mb-0"></div>
  <h1 class="text-lg">Table</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each listObjects.table as table}
        {@render card(table)}
    {/each}
  </div>
  <div class="divider mr-3 ml-3 mb-0"></div>
  <h1 class="text-lg">Statique</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each listObjects.static as obj}
        {@render card(obj)}
    {/each}
  </div>
  <div class="divider mr-3 ml-3 mb-0"></div>
  <h1 class="text-lg">Actions</h1>
  <div class="flex flex-wrap w-full gap-2 justify-center">
    {#each listObjects.action as action}
        {@render card(action)}
    {/each}
  </div>
</div>
