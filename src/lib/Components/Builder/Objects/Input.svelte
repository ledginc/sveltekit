<script lang="ts">

  interface InputOptions {
    label: string;
    value: string;
  }

  interface InputProps {
    name: string;
    type: "short_text" | "long_text" | "toggle" | "combobox" | "range" | "radio" | "checkbox";
    subType: "default" | "money" | "address" | "email" | "phone" | "date" | "time" | "datetime" | "number" | "percentage" | "color" | "image";
    description: string;
    mutable: boolean;
    defaultValue: string;
    required: boolean;
    options: InputOptions[] | undefined;
  }

  let { name, type, description, mutable, defaultValue, required, options }: InputProps = $props();
  let value = $state(defaultValue || '');

  let formattedClass: string;

  switch (type) {
    case "short_text":
      formattedClass = "input input-bordered w-full max-w-xs";
      break;
    case "long_text":
      formattedClass = "long-text";
      break;
    case "toggle":
      formattedClass = "toggle";
      break;
    case "combobox":
      formattedClass = "combobox";
      break;
    case "range":
      formattedClass = "range";
      break;
    case "radio":
      formattedClass = "radio";
      break;
    case "checkbox":
      formattedClass = "checkbox";
      break;
    default:
      formattedClass = "short-text";
      break;
  }
</script>

<div class="main">
  {#if type === 'long_text'}
    <textarea bind:value placeholder={name}>

    </textarea>
  {:else if type === "combobox" && options}
    <select>
      {#each options as option}
        <option value={option.value}>{option.label}</option>
      {/each}
    </select>
  {:else}
    <input class={formattedClass} type={type} bind:value placeholder={name} />
  {/if}
</div>
<style>
  
</style>