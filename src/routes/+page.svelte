<script lang="ts">
	import { onMount } from 'svelte';
	import { fly } from 'svelte/transition';
	import Button from '$lib/components/ui/button/button.svelte';
	import * as Card from '$lib/components/ui/card/index';
	import * as Carousel from '$lib/components/ui/carousel/index';
	import { ArrowRight, TreeDeciduous, Brain, ScanHeart, Check, Quote } from 'lucide-svelte';
	import BenefitCard from '$lib/components/layout/BenefitCard.svelte';
	import { schedule } from '$lib/data';
	import MatYoga3 from '$lib/assets/mat-yoga-3.jpg';

	let ready = false;
	onMount(() => (ready = true));
</script>

<svelte:head>
	<title>Liz Wyatt Yoga - Slow and Mindful Yoga in Kitchener-Waterloo</title>
	<meta
		name="description"
		content="Slow and Mindful yoga classes in Waterloo, Ontario. Connect deeply with your breath and body in a relaxed manner while exploring stability and ease. We are `working in` instead of `working out`!"
	/>
	<meta
		name="keywords"
		content="yoga Waterloo, yoga Kitchener-Waterloo, mindful yoga, slow yoga, inclusive yoga, accessible yoga, beginner yoga, senior yoga, yoga for all abilities"
	/>
	<link rel="canonical" href="https://liz-wyatt-yoga.com/" />
	<meta
		property="og:title"
		content="Liz Wyatt Yoga - Slow and Mindful Yoga in Kitchener-Waterloo"
	/>
	<meta property="og:description" content="Slow and Mindful yoga classes in Waterloo, Ontario." />
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liz-wyatt-yoga.com/" />
</svelte:head>

<section
	class="mx-auto flex h-auto w-full max-w-[1100px] flex-col items-center p-5 lg:mt-14 lg:p-0"
>
	<!-- Hero Banner -->
	<div
		class="flex min-h-[500px] w-full flex-col gap-4 sm:min-h-[600px] md:min-h-[700px] md:flex-row-reverse md:items-center lg:min-h-[600px]"
	>
		{#if ready}
			<!-- Image -->
			<div
				in:fly={{ delay: 200, duration: 400, y: 20 }}
				class="flex h-[300px] w-full items-center justify-center sm:h-[400px] md:h-full"
			>
				<img
					src={MatYoga3}
					alt="two middle-aged women doing yoga"
					class="h-full w-full rounded-xl object-cover"
				/>
			</div>
			<!-- Text -->
			<div class="flex flex-col gap-y-4 md:gap-y-6 md:pr-8">
				<h2
					in:fly={{ delay: 350, duration: 400, y: 20 }}
					class="text-center text-3xl font-bold tracking-wide text-primary md:text-left md:text-4xl lg:text-5xl"
				>
					Slow and Mindful Yoga for Greater Health and Wellbeing
				</h2>
				<h2
					in:fly={{ delay: 500, duration: 400, y: 20 }}
					class="font-md text-center text-xl tracking-wider text-slate-500 md:text-left md:text-2xl"
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
		<h3 class="mb-10 text-center text-3xl font-bold tracking-wide text-panache lg:mt-0">
			Why Choose Slow and Mindful Yoga?
		</h3>
		<div class="flex w-full flex-col gap-8 lg:flex-row">
			<BenefitCard>
				{#snippet icon()}<ScanHeart class="h-8 w-8 text-white" />{/snippet}
				{#snippet title()}Benefits{/snippet}
				{#snippet description()}Research suggests that slow and mindful yoga may help you to manage
					stress, improve sleep, reduce pain, improve focus and attention, increase energy, relax
					and the list goes on...{/snippet}
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
	<div class="my-10 w-full max-w-[1100px] rounded-xl md:p-8 lg:bg-slate-50">
		<div class="flex flex-col md:flex-row md:gap-14">
			<!-- Left side content -->
			<div class="mb-8 flex flex-col gap-4 md:mb-0 md:w-1/2">
				<div class="flex flex-1 flex-col justify-between">
					<div>
						<h3 class="text-center text-3xl font-bold tracking-wide text-secondary md:text-left">
							Upcoming lessons
						</h3>
						<p class="mt-3 text-center text-slate-500 md:text-left">
							Join us weekly at one of our three locations: Waterloo Memorial Recreation Complex,
							RIM Park, and St. Agatha Community Centre.
						</p>

						<!-- Added class info cards -->
						<div class="mt-4 grid w-full grid-cols-1 gap-4 sm:grid-cols-2">
							<div
								class="rounded-lg bg-slate-50 p-2 text-center shadow-md md:text-left lg:bg-white lg:p-4"
							>
								<span class="text-sm font-medium text-primary">Class Duration</span>
								<p class="mt-1 text-2xl font-semibold">60 min</p>
							</div>
							<div
								class="rounded-lg bg-slate-50 p-2 text-center shadow-md md:text-left lg:bg-white lg:p-4"
							>
								<span class="text-sm font-medium text-primary">Price</span>
								<p class="mt-1 text-2xl font-semibold">Varies by class</p>
							</div>
						</div>
					</div>

					<div class="mx-auto mt-5 w-full space-y-3 text-center sm:w-[60%] md:w-full md:text-left">
						<div
							class="flex w-full items-center justify-center gap-2 text-center text-slate-600 md:justify-start"
						>
							<Check class="text-primary" />
							<span>Suitable for all experience levels</span>
						</div>
						<div
							class="flex w-full items-center justify-center gap-2 text-center text-slate-600 md:justify-start"
						>
							<Check class="text-primary" />
							<span>Equipment provided</span>
						</div>
						<div
							class="flex w-full items-center justify-center gap-2 text-center text-slate-600 md:justify-start"
						>
							<Check class="text-primary" />
							<span>Accepting new students</span>
						</div>
					</div>

					<Button href="/schedule" class="mt-4 hidden w-full md:flex md:w-auto">
						View All Classes
						<ArrowRight />
					</Button>
				</div>
			</div>

			<!-- Right side carousel -->
			<div class="h-full md:w-1/2">
				<Carousel.Root class="mx-auto h-full w-full max-w-md">
					<Carousel.Content>
						{#each schedule as lesson}
							<Carousel.Item>
								<div class="p-1">
									<Card.Root>
										<Card.Content
											class="relative aspect-square overflow-hidden rounded-lg p-0 shadow-lg"
										>
											<!-- Background Image -->
											{#if lesson.image}
												<img
													src={lesson.image}
													alt={`${lesson.class} class`}
													class="h-full w-full object-cover"
												/>
											{/if}

											<!-- Semi-transparent overlay with details -->
											<div
												class="absolute bottom-3 left-3 right-3 h-auto rounded-lg bg-black/50 p-4 text-white"
											>
												<div class="flex h-full flex-col items-center justify-center gap-2">
													<span class="text-center text-lg font-semibold">{lesson.location}</span>
													<div class="flex flex-wrap items-center justify-center gap-2">
														{#if lesson.duration}
															<span class="rounded-full bg-white/60 px-3 py-1 text-xs">
																{lesson.duration}
															</span>
														{/if}
														<span class="rounded-full bg-white px-3 py-1 text-xs text-gray-600">
															{lesson.time}
														</span>
														<span class="rounded-full bg-primary px-4 py-1 text-xs font-medium">
															{lesson.class}
														</span>
														<a
															href="/schedule/{lesson.id}"
															class="rounded-full bg-secondary px-4 py-1 text-xs font-medium"
														>
															View Details
														</a>
													</div>
												</div>
											</div>
										</Card.Content>
									</Card.Root>
								</div>
							</Carousel.Item>
						{/each}
					</Carousel.Content>
					<Carousel.Previous class="-left-3 p-6 md:-left-10" />
					<Carousel.Next class="-right-3 p-6 md:-right-10" />
				</Carousel.Root>
				<Button
					href="/schedule"
					class="mx-auto mt-4 flex w-[50%] items-center justify-center md:hidden md:w-auto"
				>
					View All Classes
					<ArrowRight />
				</Button>
			</div>
		</div>
	</div>

	<!-- Reviews Section -->
	<div class="my-10 w-full max-w-[1100px] rounded-xl bg-slate-50 p-8">
		<h3 class="text-center text-3xl font-bold tracking-wide text-secondary">
			Hear What People Are Saying
		</h3>

		<div class="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
			<Card.Root class="h-full">
				<Card.Content class="flex h-full flex-col gap-4 p-6">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 p-2">
						<Quote class="h-4 w-4 text-primary" />
					</div>
					<p class="flex-grow italic text-slate-600">
						"For the first time in 68 years I have tried yoga. It has helped me with the aftermath
						of Non-Hodgkins, my fibromyalgia and my anxiety issues. A huge thank you to Liz for
						helping me to cope with life."
					</p>
					<div class="flex w-full justify-end">
						<p class="font-medium text-secondary">- Betty</p>
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root class="h-full">
				<Card.Content class="flex h-full flex-col gap-4 p-6">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 p-2">
						<Quote class="h-4 w-4 text-primary" />
					</div>
					<p class="flex-grow italic text-slate-600">
						"Thank you so much for teaching me yoga. Your calmness and serenity has gone a long way
						in helping me to be in a great state. My mind is very peaceful after your class. The
						breathing and the technique in which you teach touches my heart . You are a great
						teacher."
					</p>
					<div class="flex w-full justify-end">
						<p class="font-medium text-secondary">- Palak</p>
					</div>
				</Card.Content>
			</Card.Root>

			<Card.Root class="h-full">
				<Card.Content class="flex h-full flex-col gap-4 p-6">
					<div class="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 p-2">
						<Quote class="h-4 w-4 text-primary" />
					</div>
					<p class="flex-grow italic text-slate-600">
						"I look forward to Liz's class every week. It helps me to relax, breathe better, stretch
						my muscles and focus inward. It leaves me feeling centred, relaxed and energized. This
						is my kind of yoga."
					</p>
					<div class="flex w-full justify-end">
						<p class="font-medium text-secondary">- Anne</p>
					</div>
				</Card.Content>
			</Card.Root>
		</div>
	</div>
</section>
