<script lang="ts">
  import CreationModal from "./CreationModal.svelte";
  import { process } from "./index.svelte";
  import ObjectList from "./ObjectList.svelte";
  import Input from "./Objects/Input.svelte";

  let currentProcess = $state($process);
  let currentSection = $state(0);

  process.subscribe((value) => {
    currentProcess = value;
  });
</script>

<div class="flex">
  <ObjectList currentSection={currentSection} />
  <div class="w-full h-dvh flex justify-center items-center">
      {#if !currentProcess}
        <CreationModal  />
      {:else}
        {#each currentProcess.sections as section}
          
        {/each}
      {/if}
  </div>
  
</div>

