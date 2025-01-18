<script lang="ts">
  import CreationModal from "./ChildrenComponents/CreationModal.svelte";
  import { addObjectToProcess, process } from "./index.svelte";
  import ObjectList from "./ChildrenComponents/ObjectList.svelte";
  import Input from "./Objects/BuilderInput.svelte";
  import DropZone from "./ChildrenComponents/DropZone.svelte";
  import HeaderBuilder from "./ChildrenComponents/HeaderBuilder.svelte";

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
  <ObjectList />
  <div class="w-full h-full flex-col box-border">
    <HeaderBuilder currentProcess={currentProcess} />
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