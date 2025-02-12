<script lang="ts">
  import { onMount } from "svelte";
  import ProcessInput from "./Objects/ProcessInput.svelte";
  import ProcessCondition from "./Objects/ProcessCondition.svelte";
  import ProcessMath from "./Objects/ProcessMath.svelte";
  import ProcessLogic from "./Objects/ProcessLogic.svelte";
  import ProcessAction from "./Objects/ProcessAction.svelte";
  import ProcessIntegration from "./Objects/ProcessIntegration.svelte";
  import ProcessTable from "./Objects/ProcessTable.svelte";
  import ProcessStatic from "./Objects/ProcessStatic.svelte";
  import type { Process, ProcessSection } from "$lib/process";

  let { json }: { json: Process } = $props();
  let cursor: number = $state(0);

  let sections: ProcessSection[] = json.sections.sort((s1, s2) => s1.order - s2.order);

</script>

<main class="w-full h-full">
  <div class="w-2/3 h-2/3 rounded border-base-200">
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
  </div>
  
</main>