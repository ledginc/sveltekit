<script lang="ts">
  import ProcessComponent from "$lib/Components/Process/Process.svelte";
  import type { ProcessScaffolding } from "$lib/processScaffolding";

  let object: ProcessScaffolding = {
  id: "b87bf516-2279-4192-bfe6-f2e8dea24a3c",
  version: 1,
  name: "Process 1",
  sections: [
    {
      id: "0c2c1f72-fb63-44d4-9315-64ba8f626470",
      name: "Informations client",
      order: 0,
      objects : [
        {
          id: "0e0afb50-564b-4f96-bbd2-a8f9d03db0a1",
          type: "input",
          properties: {
            label: "Nom du client",
            subtype: "text",
            description: "Le nom du client pour laquelle la soumission est faite.",
            mutable: true,
            defaultValue: "",
            required: true
          }
        },
        {
          id: "dc3825f7-84e0-47dc-83f7-d709e6825be5",
          type: "input",
          properties: {
            label: "Adresse du client",
            subtype: "address",
            description: "L'adresse du client pour laquelle la soumission est faite.",
            mutable: true,
            defaultValue: "",
            required: true
          }
        }
      ]
    },
    {
      id: "b171260f-81d1-41d1-87d4-c8ff3371529d",
      name: "Reconnaissance du batiment",
      order: 1,
      objects : [
        {
          id: "f1b1b1b1-1b1b-1b1b-1b1b-1b1b1b1b1b1b",
          type: "integration",
          properties: {
            label: "Nom du batiment",
            subtype: "gmap_street",
            description: "Le nom du batiment pour lequel la soumission est faite.",
            mutable: true,
            defaultValue: "",
            required: true
          }
        }
      ]
    },
    {
      id: "60614f8a-9bb2-427c-b472-8037ee902174",
      name: "Entrée des jobs",
      order: 2,
      objects : [
      ]
    },
    {
      id: "a92c49d1-72e4-423f-8224-1ed77296cdff",
      name: "Résumé",
      order: 3,
      objects : [
      ]
    }
  ]
}
</script>

<ProcessComponent json={object} />