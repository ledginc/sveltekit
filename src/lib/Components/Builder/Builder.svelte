<script lang="ts">
  import Input from "./Input.svelte";

  let sections: any[] = [
    {
      id: "s1",
      objects: [
        {
          id: "i1",
          objectType: "Input",
          name: "Adresse",
          type: "longText",
          immutable: true,
          defaultValue: "",
          options: "",
          required: "",
          description: ""
        },
        {
          id: "i2",
          objectType: "Math",
          name: "Adresse",
          type: "longText",
          immutable: true,
          defaultValue: "",
          options: "",
          required: "",
          description: ""
        }
      ]
    }
  ];
</script>

{#each sections as section}
  <h1>{section.id}</h1>
  <div>
    {#each section.objects as object}
      {#if object.objectType === "Input"}
        <Input name={object.name} type={object.type} immutable={object.immutable} defaultValue={object.defaultValue} options={object.options} required={object.required} description={object.description} />
      {/if}
      {#if object.objectType === "Math"}
        <Math name={object.name} type={object.type} immutable={object.immutable} defaultValue={object.defaultValue} options={object.options} required={object.required} description={object.description} />
      {/if}
    {/each}
  </div>
{/each}