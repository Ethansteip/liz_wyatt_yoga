<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index';
	import * as Carousel from '$lib/components/ui/carousel/index';
	import { ArrowRight, TreeDeciduous, Brain, ScanHeart } from 'lucide-svelte';
	import BenefitCard from '$lib/components/layout/BenefitCard.svelte';
	import { schedule } from '$lib/data';

	let ready = false;
	onMount(() => (ready = true));
</script>

<section
	class="mx-auto flex h-auto w-full max-w-[1100px] flex-col items-center p-5 lg:mt-14 lg:p-0"
>
	<!-- Hero Banner -->
	<div
		class="flex h-[35rem] w-full flex-col gap-4 md:flex-row-reverse md:items-center md:justify-center"
	>
		{#if ready}
			<!-- Image -->
			<div
				in:fly={{ delay: 200, duration: 400, y: 20 }}
				class="flex h-[18rem] w-full items-center justify-center rounded bg-slate-400"
			>
				<p class="text-gray-600">Image goes here</p>
			</div>
			<!-- Text -->
			<div class="mt-5 flex flex-col gap-y-1">
				<h2
					in:fly={{ delay: 350, duration: 400, y: 20 }}
					class="text-center text-3xl font-bold tracking-wide text-primary md:text-left"
				>
					Slow and Mindful Yoga for Greater Health and Wellbeing
				</h2>
				<h2
					in:fly={{ delay: 500, duration: 400, y: 20 }}
					class="font-md text-center text-xl tracking-wider text-slate-500 md:text-left"
				>
					Inclusive and accessible yoga classes for all ages and abilities in Kitchener-Waterloo
				</h2>
				<div
					in:fly={{ delay: 700, duration: 400, y: 20 }}
					class="mt-3 flex w-full items-center justify-center md:justify-start"
				>
					<Button class="w-auto font-bold tracking-wide" href="/schedule">
						Upcoming Lessons
						<ArrowRight />
					</Button>
				</div>
			</div>
		{/if}
	</div>

	<!-- Benefits of yoga section -->
	<div class="mt-10 flex w-screen max-w-[1100px] flex-col bg-downy p-5 md:p-10 lg:rounded-xl">
		<h3 class="mb-7 mt-3 text-center text-3xl font-bold tracking-wide text-panache lg:mt-0">
			Why choose yoga?
		</h3>
		<div class="flex w-full flex-col gap-8 lg:flex-row">
			<BenefitCard>
				{#snippet icon()}<ScanHeart class="h-8 w-8 text-white" />{/snippet}
				{#snippet title()}Benefits{/snippet}
				{#snippet description()}Yoga strengthens both body and mind, improving flexibility and
					balance while building core strength.{/snippet}
			</BenefitCard>
			<BenefitCard>
				{#snippet icon()}<Brain class="h-8 w-8 text-white" />{/snippet}
				{#snippet title()}Mental Clarity{/snippet}
				{#snippet description()}In our fast-paced world, slow and mindful yoga offers a precious
					opportunity to pause and catch your breath.{/snippet}
			</BenefitCard>
			<BenefitCard>
				{#snippet icon()}<TreeDeciduous class="h-8 w-8 text-white" />{/snippet}
				{#snippet title()}Community & Growth{/snippet}
				{#snippet description()}Whether you're touching your toes or reaching for them, you'll find
					a supportive community here. My classes meet you where you are in your yoga journey.{/snippet}
			</BenefitCard>
		</div>
	</div>

	<!-- Upcoming Lessons -->
	<div
		class="flex w-full max-w-[1100px] flex-col p-5 md:flex-row-reverse md:justify-between md:p-10 lg:rounded-xl"
	>
		<div class="mb-5 flex flex-col gap-2 md:w-1/2">
			<h3
				class="mt-3 text-center text-3xl font-bold tracking-wide text-secondary md:text-left lg:mt-0"
			>
				Upcoming lessons
			</h3>
			<p class="mb-3 text-center text-slate-500 md:text-left">
				Join us weekly at one of our three locations: Waterloo Memorial Recreation Complex, RIM
				Park, and St. Agatha Community Centre.
			</p>
			<Button href="/schedule" class="hidden md:flex">
				View All
				<ArrowRight />
			</Button>
		</div>
		<Carousel.Root class="w-full max-w-xs md:w-1/2">
			<Carousel.Content>
				{#each schedule as lesson}
					<Carousel.Item>
						<div class="p-1">
							<Card.Root>
								<Card.Content
									class="flex aspect-square flex-col items-center justify-center rounded-lg bg-white p-6 text-center shadow-lg transition-shadow hover:shadow-xl"
								>
									<div class="flex flex-col items-center space-y-2">
										<span class="text-lg font-semibold text-gray-800">{lesson.location}</span>
										<span class="text-sm text-gray-600">{lesson.address}</span>
										<span class="text-sm text-gray-700">{lesson.weekday}</span>
										<span class="text-sm text-gray-700">{lesson.time}</span>
										<span
											class="rounded-full bg-primary px-3 py-1 text-sm font-medium text-panache"
										>
											{lesson.class}
										</span>
										<Button variant="link" class="text-primary" href="/schedule/{lesson.id}"
											>View Details</Button
										>
									</div>
								</Card.Content>
							</Card.Root>
						</div>
					</Carousel.Item>
				{/each}
			</Carousel.Content>
			<Carousel.Previous class="hidden md:flex" />
			<Carousel.Next class="hidden md:flex" />
		</Carousel.Root>
		<Button href="/schedule" class="mt-3 flex md:hidden">
			View All
			<ArrowRight />
		</Button>
	</div>
</section>
