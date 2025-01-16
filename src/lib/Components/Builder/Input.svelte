<script lang="ts">
  import Textfield from '@smui/textfield';
  import HelperText from '@smui/textfield/helper-text';
  let { name, type, immutable, defaultValue, options, required, description } = $props();
  let value = $state(defaultValue || '');


</script>

<div class="main">
    <Textfield
      textarea
      bind:value={value}
      label={name}
      input$rows={4}
      input$cols={36}
      input$resizable={false}
    >
      {#snippet helper()}
        <HelperText>{description}</HelperText>
      {/snippet}
    </Textfield>
</div>

<style>
  
</style>