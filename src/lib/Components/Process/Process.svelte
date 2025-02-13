<script lang="ts">
  import ProcessInput from "./Objects/ProcessInput.svelte";
  import ProcessCondition from "./Objects/ProcessCondition.svelte";
  import ProcessMath from "./Objects/ProcessMath.svelte";
  import ProcessLogic from "./Objects/ProcessLogic.svelte";
  import ProcessAction from "./Objects/ProcessAction.svelte";
  import ProcessIntegration from "./Objects/ProcessIntegration.svelte";
  import ProcessTable from "./Objects/ProcessTable.svelte";
  import ProcessStatic from "./Objects/ProcessStatic.svelte";
  import type { ProcessScaffolding, ProcessSectionScaffolding } from "$lib/processScaffolding";
  import { Process } from "$lib/process";

  let { json }: { json: ProcessScaffolding } = $props();
  let processValue: Process = new Process(json);
  let cursor: number = $state(0);

  let sections: ProcessSectionScaffolding[] = json.sections.sort((s1, s2) => s1.order - s2.order);

  function next() {
    //saveToDatabase()
  }

  function previous() {

  }

  function submit() {

  }

</script>

<main class="w-full h-full flex flex-col justify-start items-center p-2 relative">
  <ul class="steps steps-vertical lg:steps-horizontal">
    {#each sections as section}
    <li class={"step " + (section.order <= cursor ? "step-primary" : "")}>{section.name}</li>
    {/each}
  </ul>
  <div class="w-auto h-auto p-8 rounded border border-base-200 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-evenly items-center">
    {#each sections[cursor].objects as object}
      {#if object.type === "input"}
        <ProcessInput properties={object.properties} />
      {:else if object.type === "condition"}
        <ProcessCondition />
      {:else if object.type === "math"}
        <ProcessMath />
      {:else if object.type === "logic"}
        <ProcessLogic />
      {:else if object.type === "action"}
        <ProcessAction />
      {:else if object.type === "integration"}
        <ProcessIntegration />
      {:else if object.type === "table"}
        <ProcessTable />
      {:else if object.type === "static"}
        <ProcessStatic />
      {/if}
    {/each}
    <div class={"w-full flex " + (cursor === 0 ? "justify-end" : "justify-between")}>
      {#if cursor !== 0}
        <button class="btn btn-secondary" onclick={() => cursor--}>Précédent</button>
      {/if}
      {#if cursor === sections.length - 1}
        <button class="btn btn-success">Soumettre</button>
      {:else}
        <button class="btn btn-primary" onclick={() => cursor++}>Suivant</button>
      {/if}
    </div>
    
  </div>
  
</main>