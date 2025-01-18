<script lang="ts">
  import ObjectList from "./ObjectList.svelte";
  import { process } from "$lib/Constants/fakeProtech";
  import Input from "./Objects/Input.svelte";

  export const currentSection = $state(0);

  const sections = process.sections;
</script>

<div class="flex">
  <ObjectList />
  <div class="">
    {#each sections as section}
      <h1>{section.id}</h1>
      <div>
        {#each section.objects as object}
          {#if object.object_type === "input"}
            <Input
              name={object.properties.name}
              type={object.properties.type}
              subType={object.properties.sub_type}
              mutable={object.properties.mutable}
              defaultValue={object.properties.default_value}
              options={object.properties.options}
              required={object.properties.required}
              description={object.properties.description}
            />
          {/if}
        {/each}
      </div>
    {/each}
  </div>
  
</div>

