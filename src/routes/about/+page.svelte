<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Instagram, Mail, Phone, BookmarkCheck } from 'lucide-svelte';
	import Liz from '$lib/assets/liz.jpg';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<svelte:head>
	<title>About Liz Wyatt - Certified Yoga Instructor in Kitchener-Waterloo</title>
	<meta
		name="description"
		content="Meet Liz Wyatt, a certified yoga instructor with over 25 years of experience teaching slow and mindful yoga in Kitchener-Waterloo. E-RYT 550 certified."
	/>
	<meta
		name="keywords"
		content="Liz Wyatt, yoga instructor, Kitchener-Waterloo yoga, slow yoga, mindful yoga, certified yoga teacher, E-RYT 550, Canadian Yoga Alliance"
	/>
</svelte:head>

<section class="mx-auto flex w-full max-w-[1100px] flex-col gap-10 p-5 py-10 lg:py-20">
	<!-- Hero Section -->
	<div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-20">
		<!-- Image -->
		<div class="flex w-full items-center justify-center lg:w-1/2">
			<div
				class="aspect-square max-h-[600px] w-auto overflow-hidden rounded-xl bg-slate-200 shadow-lg"
			>
				<img src={Liz} alt="Liz Wyatt" />
			</div>
		</div>

		<!-- Text Content -->
		<div class="flex w-full flex-col gap-6 lg:w-1/2">
			<div class="space-y-4">
				<h1 class="text-4xl font-bold tracking-tight text-primary lg:text-5xl">Liz Wyatt</h1>
				<h2 class="text-xl font-medium text-secondary">Core Principles of Slow and Mindful Yoga</h2>
			</div>

			<div class="space-y-4 text-slate-600">
				<p>
					Slow and Mindful yoga is all about connecting deeply with your breath and body in a
					relaxed manner. This practice encourages exploration of stability and ease in both mind
					and body. We are “working in” instead of “working out”! By moving slowly through poses and
					paying attention to breath and body sensations as they arise, you can gain greater health
					and wellbeing by reducing stress, cultivating mental clarity, and improving physical
					strength, flexibility and mobility.
				</p>
				<p>
					<span class="font-bold text-primary">Breath Awareness:</span> Breathing is a core focus. You'll
					use deep, slow breaths to guide your movements.
				</p>
				<p>
					<span class="font-bold text-primary">Postures/Poses:</span> The poses are simple, practised
					slowly, and often layered with fun variations. They are practiced dynamically and then held
					for a short time. This encourages a relaxation response even while moving.
				</p>
				<p>
					<span class="font-bold text-primary">Mindfulness:</span> You are encouraged to pay attention
					to your body's sensations and the flow of your breath in moment to moment awareness to avoid
					rushing. Achieving “the perfect pose” is not a consideration.
				</p>
				<p>
					<span class="font-bold text-primary">Pauses:</span> “The pause is as important as the pose”.
					Throughout the class we'll pause our movement and relax for a few breaths in a restorative
					pose to reflect on our experience.
				</p>
			</div>

			<!-- Contact Information -->
			<div class="flex w-full flex-row flex-wrap gap-4">
				<Button href="mailto:liz@example.com" variant="default" class="w-full gap-2 md:w-auto">
					<Mail class="h-4 w-4" />
					<span>lizwyatt17@gmail.com</span>
				</Button>
				<Button href="tel:519-123-4567" variant="default" class="w-full gap-2 md:w-auto">
					<Phone class="h-4 w-4" />
					<span>+1 (226) 622-7172</span>
				</Button>
				<Button
					href="https://www.instagram.com/lizwyatt_yogayou/"
					target="_blank"
					variant="default"
					class="w-full gap-2 md:w-auto"
				>
					<Instagram class="h-4 w-4" />
					<span>@lizwyattyoga</span>
				</Button>
			</div>
		</div>
	</div>

	<!-- Certifications Section -->
	<Card.Root>
		<Card.Content class="p-6">
			<h2 class="mb-6 text-2xl font-bold text-primary">Certifications & Training</h2>
			<div class="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
				{#each ['Canadian Yoga Alliance Certified Yoga Instructor', 'E-RYT 550 - Canadian Yoga Alliance', 'E-CYT 500 GLOBAL ONLINE YOGA ALLIANCE', '40 HOUR SUBTLE YOGA TEACHER TRAINING', '100+ HOURS SUBTLE YOGA WORKSHOP TRAINING', '50 HOURS YOGA PHYSIOLOGY NYU', '100 HOUR MEDITATION TEACHER CERTIFICATION: Yogamu'] as certification}
					<div class="flex w-full items-center gap-4 rounded-lg bg-slate-200 p-4">
						<BookmarkCheck class="h-5 w-5 shrink-0 text-primary" />
						<p class="font-medium text-slate-700">{certification}</p>
					</div>
				{/each}
			</div>
		</Card.Content>
	</Card.Root>
</section>
