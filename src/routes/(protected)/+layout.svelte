<script lang="ts">
	import '../../app.css';
	let { children } = $props();
</script>

<div class="main">
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