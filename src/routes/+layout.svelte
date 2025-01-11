<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	// Supports weights 200-800
	import '@fontsource-variable/manrope';

	let { children } = $props();
</script>

<main>
	<Navbar />
	{@render children()}
</main>

<style>
	main {
		font-family: 'Manrope Variable', sans-serif;
	}
</style>
