<script lang="ts">
  import Input from "$lib/Components/Builder/Input.svelte";
  import Button from "@smui/button";
  import Builder from "$lib/Components/Builder/Builder.svelte";

  let object = ["shortText", "longText", "money", "address"];
  let html: string = $state("");

  function renderHtml() {
    html += `<Input name="Adresse" type="longText" immutable=true defaultValue="" options="" required="" description="" />`;
    html += `<Builder />`;
  }

</script>

<div class="main">
  <div>
    <h2>Data Entry</h2>
    <Button variant="raised">Short Text</Button>
    <Button variant="raised">Long Text</Button>
    <Button variant="raised">Money</Button>
    <Button onclick={renderHtml} variant="raised">Address</Button>
  </div>
</div>


<Builder />

{@html html}

<!-- <Math />

<Condition />

<Information />

<Table />

<Action /> -->





<style>

</style>