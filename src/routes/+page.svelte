<script lang="ts">
	import { onMount } from 'svelte';
	import { fade, fly } from 'svelte/transition';

	let ready = false;
	onMount(() => (ready = true));
</script>

<section class="flex h-screen w-full flex-col items-center p-5">
	<!-- Hero Banner -->
	<div class="flex flex-col gap-4">
		{#if ready}
			<div
				in:fly={{ delay: 200, duration: 400, y: 20 }}
				class="flex h-[18rem] w-full items-center justify-center rounded bg-gray-200"
			>
				<p class="text-gray-600">Image goes here</p>
			</div>
			<div class="flex flex-col gap-y-1">
				<h2
					in:fly={{ delay: 350, duration: 400, y: 20 }}
					class="text-title text-3xl font-bold tracking-wide"
				>
					Catch Your Breath
				</h2>
				<h2
					in:fly={{ delay: 500, duration: 400, y: 20 }}
					class="font-md text-2xl tracking-wider text-gray-500"
				>
					Inclusive yoga classes for all ages and abilities in Kitchener-Waterloo
				</h2>
			</div>
		{/if}
	</div>
</section>
