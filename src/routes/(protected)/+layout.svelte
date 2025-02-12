<script lang="ts">
	import '../../app.css';
  import { page } from '$app/state';
	let { children } = $props();
  
</script>

<div class="main">

  <div class="drawer lg:drawer-open">
    <input id="my-drawer-2" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content flex flex-col items-center justify-center">
      <!-- Page content here -->
      <label for="my-drawer-2" class="btn btn-primary drawer-button lg:hidden">
        Open drawer
      </label>
    </div>
    <div class="drawer-side">
      <label for="my-drawer-2" aria-label="close sidebar" class="drawer-overlay"></label>
      <ul class="menu bg-base-200 text-base-content min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li class={page.url.pathname === "/dashboard" ? "active" : ""}><a href="/dashboard">Tableau de bord</a></li>
        <li class={page.url.pathname === "/quote" ? "active" : ""}><a href="/quote">Soumission</a></li>
      </ul>
    </div>
  </div>

	<div class="slot">
		{@render children()}
	</div>
</div>

<style>
	.main {
		display: flex;
		height: 100dvh;
		width: 100dvw;
		position: relative;
	}
	.slot {
		flex: 1;
	}
</style>