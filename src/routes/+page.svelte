<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Button from '$lib/components/ui/button/button.svelte';
	import { ArrowRight, Shield } from 'lucide-svelte';
	import BenefitCard from '$lib/components/layout/BenefitCard.svelte';

	let ready = false;
	onMount(() => (ready = true));
</script>

<section class="mx-auto flex h-screen w-full max-w-[1100px] flex-col items-center p-5">
	<!-- Hero Banner -->
	<div class="flex h-full flex-col gap-4">
		{#if ready}
			<div
				in:fly={{ delay: 200, duration: 400, y: 20 }}
				class="flex h-[18rem] w-full items-center justify-center rounded bg-slate-400"
			>
				<p class="text-gray-600">Image goes here</p>
			</div>
			<div class="mt-5 flex flex-col gap-y-1">
				<h2
					in:fly={{ delay: 350, duration: 400, y: 20 }}
					class="text-center text-3xl font-bold tracking-wide text-secondary"
				>
					Catch Your Breath
				</h2>
				<h2
					in:fly={{ delay: 500, duration: 400, y: 20 }}
					class="font-md text-center text-2xl tracking-wider text-slate-500"
				>
					Inclusive yoga classes for all ages and abilities in Kitchener-Waterloo
				</h2>
				<div
					in:fly={{ delay: 700, duration: 400, y: 20 }}
					class="mt-3 flex w-full items-center justify-center"
				>
					<Button class="w-auto font-bold tracking-wide" href="/schedule">
						Upcoming Sessions
						<ArrowRight />
					</Button>
				</div>
			</div>
		{/if}
	</div>

	<!-- Benefits of yoga section -->
	<div class="bg-downy mt-10 flex w-screen flex-col p-3">
		<h3 class="text-panache mb-7 text-center text-3xl font-bold tracking-wide">Why Choose yoga?</h3>
		<div class="flex w-full flex-col gap-8">
			<BenefitCard>
				{#snippet icon()}<Shield class="h-8 w-8 text-white" />{/snippet}
				{#snippet title()}Physical Benefits{/snippet}
				{#snippet description()}Yoga strengthens both body and mind, improving flexibility and
					balance while building core strength.{/snippet}
			</BenefitCard>
			<BenefitCard>
				{#snippet icon()}<Shield class="h-8 w-8 text-white" />{/snippet}
				{#snippet title()}Mental Clarity{/snippet}
				{#snippet description()}In our fast-paced world, yoga offers a precious opportunity to slow
					down and find clarity.{/snippet}
			</BenefitCard>
			<BenefitCard>
				{#snippet icon()}<Shield class="h-8 w-8 text-white" />{/snippet}
				{#snippet title()}Community & Growth{/snippet}
				{#snippet description()}Whether you're touching your toes or reaching for them, you'll find
					a supportive community here; Our classes welcome practitioners of all levels.{/snippet}
			</BenefitCard>
		</div>
	</div>
</section>
