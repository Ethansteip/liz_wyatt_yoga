<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Instagram, Mail, Phone, BookmarkCheck } from 'lucide-svelte';
	import Liz from '$lib/assets/liz-2.jpg';
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
		content="Liz Wyatt, yoga instructor, yoga Waterloo, Kitchener-Waterloo yoga, slow yoga, mindful yoga, certified yoga teacher, E-RYT 550, Canadian Yoga Alliance"
	/>
	<link rel="canonical" href="https://liz-wyatt-yoga.com/about" />
	<meta property="og:title" content="About Liz Wyatt - Certified Yoga Instructor" />
	<meta
		property="og:description"
		content="Meet Liz Wyatt, a certified yoga instructor teaching slow and mindful yoga in Waterloo, Ontario."
	/>
	<meta property="og:type" content="website" />
	<meta property="og:url" content="https://liz-wyatt-yoga.com/about" />
</svelte:head>

<section class="mx-auto flex w-full max-w-[1100px] flex-col gap-16 p-6 py-10 md:p-8 lg:py-20">
	<!-- Top Section: Image and About -->
	<div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-16">
		<!-- Image -->
		<div class="flex w-full items-center justify-center lg:w-1/2">
			<img
				src={Liz}
				alt="Liz Wyatt"
				class="h-auto rounded-xl transition-transform duration-300 group-hover:scale-105 sm:max-h-[700px] sm:max-w-[400px] md:h-[25rem] md:object-cover md:p-0 lg:max-h-[1200px] lg:max-w-[800px]"
			/>
		</div>

		<!-- About Liz Wyatt -->
		<div class="flex w-full flex-col gap-4 lg:w-1/2">
			<div class="space-y-4">
				<h1 class="text-4xl font-bold tracking-tight text-primary lg:text-5xl">
					About Your Instructor
				</h1>
				<h2 class="text-xl font-medium text-secondary">Liz Wyatt, BA, BEd, E-RYT 550</h2>
			</div>

			<div class="space-y-6 text-slate-600">
				<p class="leading-relaxed">
					My yoga journey began in 1993, and since 2000, I've had the honor of guiding others on
					their own path. My teaching has been deeply influenced by Kristine Weber's Subtle Yoga
					method, which I've been studying since 2020. It's also a joy to mentor other yoga
					teachers, a role I've been in since 2005. I truly believe that yoga is for everyone, and
					it's my passion to help you discover what this practice can do for you.
				</p>
				<p class="leading-relaxed">
					When you step into my class, you'll find a space that is inclusive and accessible. We're
					not focused on strong, physical exercise; instead, we'll explore what I like to call
					"innercise"—a practice rooted in the yoga tradition and informed by modern neuroscience.
					My goal is to meet you exactly where you are and provide a calm, encouraging environment
					where you feel empowered to reach your own goals.
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

	<!-- Core Principles Section -->
	<div
		class="w-full overflow-hidden rounded-2xl bg-slate-50 p-8 shadow-[0_8px_30px_rgb(0,0,0,0.12)]"
	>
		<div class="space-y-8">
			<div class="space-y-2">
				<h2 class="text-center text-2xl font-bold text-primary md:text-3xl">
					Core Principles of Slow and Mindful Yoga
				</h2>
			</div>

			<div class="grid gap-6 md:grid-cols-2">
				<div class="space-y-4 rounded-xl bg-white p-6 shadow-md">
					<h3 class="text-lg font-semibold text-secondary md:text-xl">Breath Awareness</h3>
					<p class="text-slate-600">
						Breathwork is the foundation. You'll use deep, slow breaths to guide your movements and
						learn a variety of techniques to gently raise energy or to calm down.
					</p>
				</div>

				<div class="space-y-4 rounded-xl bg-white p-6 shadow-md">
					<h3 class="text-lg font-semibold text-secondary md:text-xl">Postures/Poses</h3>
					<p class="text-slate-600">
						The poses are simple, practised slowly, and often layered with effective, fun
						variations. We move in and out of every pose and then stay for a short time. Make every
						pose your own. Achieving "the perfect pose" is not a consideration.
					</p>
				</div>

				<div class="space-y-4 rounded-xl bg-white p-6 shadow-md">
					<h3 class="text-lg font-semibold text-secondary md:text-xl">Mindfulness</h3>
					<p class="text-slate-600">
						You are encouraged to pay attention to your body's sensations and the flow of your
						breath in moment to moment awareness to avoid rushing.
					</p>
				</div>

				<div class="space-y-4 rounded-xl bg-white p-6 shadow-md">
					<h3 class="text-xl font-semibold text-secondary">Pausing</h3>
					<p class="text-slate-600">
						"The pause is as important as the pose." Throughout the class we'll pause our movement
						and relax for a few breaths in a restorative pose to reflect on our experience.
					</p>
				</div>
			</div>
		</div>
	</div>

	<!-- Certifications Section -->
	<Card.Root class="overflow-hidden">
		<Card.Content class="p-8">
			<h2 class="mb-8 text-center text-2xl font-bold text-primary lg:text-3xl">
				Certifications & Training
			</h2>
			<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
				{#each ['Canadian Yoga Alliance Certified Yoga Instructor', 'E-RYT 550 - Canadian Yoga Alliance', 'E-CYT 500 Global Online Yoga Alliance', '40 hour Subtle Yoga Teacher Training', '100+ hours Subtle Yoga Workshop Trainings', '50 hours Yoga Physiology NYU', '100 hour Meditation Teacher Certification:  Yogamu'] as certification}
					<div
						class="flex w-full items-center gap-4 rounded-lg bg-slate-100 p-4 transition-colors duration-200 hover:bg-slate-200"
					>
						<BookmarkCheck class="h-5 w-5 shrink-0 text-primary" />
						<p class="font-medium text-slate-700">{certification}</p>
					</div>
				{/each}
			</div>
		</Card.Content>
	</Card.Root>
</section>
