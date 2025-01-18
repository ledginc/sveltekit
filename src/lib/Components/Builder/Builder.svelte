<script lang="ts">
  import CreationModal from "./ChildrenComponents/CreationModal.svelte";
  import { addObjectToProcess, process } from "./index.svelte";
  import ObjectList from "./ObjectList.svelte";
  import Input from "./Objects/BuilderInput.svelte";
  import DropZone from "./ChildrenComponents/DropZone.svelte";

  let currentProcess = $state($process);
  let currentSectionId = $state(0);

  process.subscribe((value) => {
    currentProcess = value;
    if (value && value.sections.length > 0) {
      setTimeout(() => {
        const dropZone = document.querySelector(`[data-containertype="dropzone"][data-sectionid="${currentSectionId}"]`);
        if (dropZone) {
          dropZone.addEventListener("dragover", (e) => {
            e.preventDefault();
            const event = e as DragEvent;
            if (event && event.dataTransfer) {
              event.dataTransfer.dropEffect = 'move';
            }
          });
          dropZone.addEventListener("drop", (e) => {
            e.preventDefault();
            const event = e as DragEvent;
            if (event && event.dataTransfer) {
              const data = event.dataTransfer.getData('text/plain');
              const category = data.split("/")[0];
              const type = data.split("/")[1];
              addObjectToProcess(category, type, currentSectionId);
            }
          });
        } else {
          console.error("Drop zone not found");
        }
      }, 1500);
  }
});

</script>

{#if !currentProcess}
  <CreationModal/>
{:else}
<div class="flex max-w-dvw max-h-dvh box-border">
  <ObjectList currentSection={currentSectionId}  />
  <div class="w-full h-full flex-col box-border">
    <div class="w-full h-12 border-b p-1 box-border flex justify-between items-center">
      <h2 class="text-lg font-semibold box-border">Création du processus <span class="font-bold">{currentProcess?.name}</span></h2>
      <button class="btn btn-primary btn-sm" >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#000000" xmlns="http://www.w3.org/2000/svg"> <path d="M11.8834 3.00673L12 3C12.5128 3 12.9355 3.38604 12.9933 3.88338L13 4V11H20C20.5128 11 20.9355 11.386 20.9933 11.8834L21 12C21 12.5128 20.614 12.9355 20.1166 12.9933L20 13H13V20C13 20.5128 12.614 20.9355 12.1166 20.9933L12 21C11.4872 21 11.0645 20.614 11.0067 20.1166L11 20V13H4C3.48716 13 3.06449 12.614 3.00673 12.1166L3 12C3 11.4872 3.38604 11.0645 3.88338 11.0067L4 11H11V4C11 3.48716 11.386 3.06449 11.8834 3.00673L12 3L11.8834 3.00673Z" fill="#000000"/> </svg>
        Ajouter une section
      </button>
    </div>
      <div class="box-border flex flex-col items-center bg-base-200 p-4 w-full math">
        {#each currentProcess.sections as section}
          <div class="h-auto w-4/5 bg-base-100 box-border p-3 rounded-lg items-center flex flex-col gap-3" data-containertype="section" data-sectionid={section.id}>
            <h3 class="text-lg">{section.name}</h3>
            {#each section.objects as object}
              <Input name={object.properties.name} type={object.properties.type} description={object.properties.description} mutable={object.properties.mutable} defaultValue={object.properties.defaultValue} required={object.properties.required} options={object.properties.options} />
            {/each}
            <DropZone section={section} />
          </div>
        {/each}
      </div>
  </div>
</div>
{/if}

<style lang="postcss">
  .math {
    height: calc(100dvh - 48px);
  }
</style>