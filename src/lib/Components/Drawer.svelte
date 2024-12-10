<script lang="ts">
  import Button from "./Button.svelte";
  import IconButton from "./IconButton.svelte";
  import { page } from "$app/stores";
  import { getSvgByName } from "$lib/Icons";
  import { goto } from "$app/navigation";

  let drawerOpen: boolean = $state(true);
  let currentRoute: string = $state('');

  function toggleDrawer() {
    drawerOpen = !drawerOpen;
  }

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
<div class={(drawerOpen ? "open" : "closed")+" box-border pr-2 pb-2 pl-2 flex flex-col"}>
  <div class="header">
    <IconButton width={'40px'} height={'100%'} icon={'hamburger'}></IconButton>
    <h1 class="w-2/3 text-center font-semibold">BB Industries</h1>
  </div>
  <div class="border-t">
    <div class="flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10">
      <div class="icon">
          {@html getSvgByName('home', currentRoute !== "/")}
      </div>
      <div class={`text ${currentRoute === "/" ? "font-semibold" : ""}`}>
          Accueil
      </div>
      <button onclick={() => {navigate('/')}}></button>
    </div>
    <div class="flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10">
      <div class="icon">
          {@html getSvgByName('dashboard', currentRoute !== "/dashboard")}
      </div>
      <div class={`text ${currentRoute === "/dashboard" ? "font-semibold" : ""}`}>
          Tableau de bord
      </div>
      <button onclick={() => {navigate('/dashboard')}}></button>
    </div>
    <div class="flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10">
      <div class="icon">
          {@html getSvgByName('quote', currentRoute !== "/quotes")}
      </div>
      <div class={`text ${currentRoute === "/quotes" ? "font-semibold" : ""}`}>
          Soumissions
      </div>
      <button onclick={() => {navigate('/quotes')}}></button>
    </div>
    <div class="flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10">
      <div class="icon">
          {@html getSvgByName('agenda', currentRoute !== "/agenda")}
      </div>
      <div class={`text ${currentRoute === "/agenda" ? "font-semibold" : ""}`}>
          Agenda
      </div>
      <button onclick={() => {navigate('/agenda')}}></button>
    </div>
    <div class="flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10">
      <div class="icon">
          {@html getSvgByName('inventory', currentRoute !== "/inventory")}
      </div>
      <div class={`text ${currentRoute === "/inventory" ? "font-semibold" : ""}`}>
          Inventaire
      </div>
      <button onclick={() => {navigate('/inventory')}}></button>
    </div>
    <div class="flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10">
      <div class="icon">
          {@html getSvgByName('people', currentRoute !== "/employees")}
      </div>
      <div class={`text ${currentRoute === "/employees" ? "font-semibold" : ""}`}>
          Personnel
      </div>
      <button onclick={() => {navigate('/employees')}}></button>
    </div>
  </div>
  <div class="flex flex-1">
    
  </div>
  <div class="border-t">
    <div class="flex items-center justify-evenly relative rounded mt-1 mb-1 w-full h-10">
      <div class="icon">
          {@html getSvgByName('settings', currentRoute !== "/settings")}
      </div>
      <div class={`text ${currentRoute === "/settings" ? "font-semibold" : ""}`}>
          Paramètres
      </div>
      <button onclick={() => {navigate('/settings')}}></button>
    </div>
  </div>
</div>

<style>
  .open {
    width: 14rem;
    height: 100%;
    transition: width 0.3s ease;
  }
  .closed {
    width: 4rem;
    height: 100%;
    transition: width 0.3s ease;
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
    background-color: rgba(0, 0, 0, 0.05);
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
</style>