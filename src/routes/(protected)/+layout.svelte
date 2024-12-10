<script lang="ts">
	import Drawer from '$lib/Components/Drawer.svelte';
	import Button from '$lib/Components/Button.svelte';
	import '../../app.css';
	let { children } = $props();
</script>

<div class="main">
	<Drawer />
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