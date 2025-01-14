<script lang="ts">
  import { page } from "$app/stores";
  import { getSvgByName } from "$lib/Icons";
  import { goto } from "$app/navigation";

  let drawerOpen: boolean = $state(true);
  let currentRoute: string = $state('');

  function navigate(route: string) {
    console.log(route);
    if (currentRoute === route) {
      return;
    }
    goto(route);
  }

  page.subscribe((value) => {
    currentRoute = value.url.pathname;
  });

  
</script>

<!-- svelte-ignore a11y_consider_explicit_label -->
<div class={(drawerOpen ? "open" : "closed")+" box-border pr-2 pb-2 pl-2 flex flex-col drawer"}>
  <div class="header">
    <div class="flex items-center justify-evenly relative rounded mt-1 mb-1">
      <div class="icon">
          {@html getSvgByName('hamburger', true)}
      </div>
      <button onclick={() => {drawerOpen = !drawerOpen}}></button>
  </div>
  {#if drawerOpen}
    <h1 class="w-2/3 text-left font-semibold">BB Industries</h1>
  {/if}
  </div>
  <div class="border-t">
    <div class={`flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10 ${currentRoute === "/" ? "active" : ""}`}>
      <div class="icon">
          {@html getSvgByName('home', currentRoute !== "/")}
      </div>
      {#if drawerOpen}
      <div class={`text ${currentRoute === "/" ? "font-semibold" : ""}`}>
          Accueil
      </div>
      {/if}
      <button onclick={() => {navigate('/')}}></button>
    </div>
    <div class={`flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10 ${currentRoute === "/dashboard" ? "active" : ""}`}>
      <div class="icon">
          {@html getSvgByName('dashboard', currentRoute !== "/dashboard")}
      </div>
      {#if drawerOpen}
      <div class={`text ${currentRoute === "/dashboard" ? "font-semibold" : ""}`}>
          Tableau de bord
      </div>
      {/if}
      <button onclick={() => {navigate('/dashboard')}}></button>
    </div>
    <div class={`flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10 ${currentRoute === "/quotes" ? "active" : ""}`}>
      <div class="icon">
          {@html getSvgByName('quote', currentRoute !== "/quotes")}
      </div>
      {#if drawerOpen}
      <div class={`text ${currentRoute === "/quotes" ? "font-semibold" : ""}`}>
          Soumissions
      </div>
      {/if}
      <button onclick={() => {navigate('/quotes')}}></button>
    </div>
    <div class={`flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10 ${currentRoute === "/agenda" ? "active" : ""}`}>
      <div class="icon">
          {@html getSvgByName('agenda', currentRoute !== "/agenda")}
      </div>
      {#if drawerOpen}
      <div class={`text ${currentRoute === "/agenda" ? "font-semibold" : ""}`}>
          Agenda
      </div>
      {/if}
      <button onclick={() => {navigate('/agenda')}}></button>
    </div>
    <div class={`flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10 ${currentRoute === "/inventory" ? "active" : ""}`}>
      <div class="icon">
          {@html getSvgByName('inventory', currentRoute !== "/inventory")}
      </div>
      {#if drawerOpen}
      <div class={`text ${currentRoute === "/inventory" ? "font-semibold" : ""}`}>
          Inventaire
      </div>
      {/if}
      <button onclick={() => {navigate('/inventory')}}></button>
    </div>
    <div class={`flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10 ${currentRoute === "/employees" ? "active" : ""}`}>
      <div class="icon">
          {@html getSvgByName('people', currentRoute !== "/employees")}
      </div>
      {#if drawerOpen}
      <div class={`text ${currentRoute === "/employees" ? "font-semibold" : ""}`}>
          Personnel
      </div>
      {/if}
      <button onclick={() => {navigate('/employees')}}></button>
    </div>
  </div>
  <div class="flex flex-1">
    
  </div>
  <div class="border-t">
    <div class={`flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10 ${currentRoute === "/settings" ? "active" : ""}`}>
      <div class="icon">
          {@html getSvgByName('settings', currentRoute !== "/settings")}
      </div>
      {#if drawerOpen}
      <div class={`text ${currentRoute === "/settings" ? "font-semibold" : ""}`}>
          Paramètres
      </div>
      {/if}
      <button onclick={() => {navigate('/settings')}}></button>
    </div>
  </div>
</div>

<style>
  .open {
    width: 14rem;
    height: 100%;
  }
  .closed {
    width: 4rem;
    height: 100%;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    height: 3.5rem;
  }
  button {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    background: transparent;
    border: none;
    cursor: pointer;
    transition: background-color 0.3s ease, box-shadow 0.3s ease;
  }
  button:hover {
    background-color: hsla(0, 0%, 80%, 0.25);
  }
  .icon {
    width: 40px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  .text {
    width: 66.67%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
  }
  .active {
    background-color: hsl(0, 0%, 85%);
  }
  .drawer {
    background-color: hsl(0, 0%, 98%);
    border-right: 1px solid hsl(0, 0%, 97%);
  }
</style>