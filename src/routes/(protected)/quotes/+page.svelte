<script lang="ts">
  import ProcessComponent from "$lib/Components/Process/Process.svelte";
  import type { Process } from "$lib/process";
  import type { ProcessScaffolding } from "$lib/processScaffolding";

  let object: ProcessScaffolding = {
  id: "b87bf516-2279-4192-bfe6-f2e8dea24a3c",
  name: "Process 1",
  sections: [
    {
      id: "0c2c1f72-fb63-44d4-9315-64ba8f626470",
      name: "Section 1",
      order: 0,
      objects : [
        {
          id: "0e0afb50-564b-4f96-bbd2-a8f9d03db0a1",
          type: "input",
          properties: {
            subtype: "text",
            description: "This is a text input",
            mutable: true,
            defaultValue: "Default value",
            required: true
          }
        },
        {
          id: "dc3825f7-84e0-47dc-83f7-d709e6825be5",
          type: "input",
          properties: {
            subtype: "address",
            description: "This is a text input",
            mutable: true,
            defaultValue: "Default value",
            required: true
          }
        }
      ]
    }
  ]
}
</script>

<ProcessComponent json={object} />