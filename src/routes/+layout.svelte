<script lang="ts">
	import '../app.css';
	import Navbar from '$lib/components/layout/Navbar.svelte';
	import Footer from '$lib/components/layout/Footer.svelte';
	import '@fontsource-variable/manrope';

	let { children } = $props();
</script>

<main>
	<Navbar />
	{@render children()}
	<Footer />
</main>

<style>
	main {
		font-family: 'Manrope Variable', sans-serif;
	}
</style>
