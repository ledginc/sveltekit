<script lang="ts">
  import type { ProcessInputPropertiesScaffolding } from "$lib/processScaffolding";

  let {properties}: {properties: ProcessInputPropertiesScaffolding} = $props();
</script>

<div class=" min-w-96 flex justify-center items-center">
  <label class="form-control w-full max-w-xs">
      <div class="label">
        <div class="tooltip" data-tip={properties.description}>
        <span class="label-text">{properties.label}</span>
        </div>
      </div>
  <input type="text" class="input input-bordered w-full max-w-xs rounded-md" defaultValue={properties.defaultValue} />
  <div class="label">
  </div>
</label>
</div>