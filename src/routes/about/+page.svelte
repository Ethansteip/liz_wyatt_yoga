<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Instagram, Mail, Phone } from 'lucide-svelte';
	import Liz from '$lib/assets/liz.jpg';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="mx-auto flex w-full max-w-[1100px] flex-col gap-10 p-5 py-10 lg:py-20">
	<!-- Hero Section -->
	<div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-20">
		<!-- Image -->
		<div class="w-full lg:w-1/2">
			<div class="aspect-square w-full overflow-hidden rounded-xl bg-slate-200 shadow-lg">
				<img src={Liz} alt="Liz Wyatt" />
			</div>
		</div>

		<!-- Text Content -->
		<div class="flex w-full flex-col gap-6 lg:w-1/2">
			<div class="space-y-4">
				<h1 class="text-4xl font-bold tracking-tight text-primary lg:text-5xl">
					Hi, I'm Liz Wyatt
				</h1>
				<h2 class="text-xl font-medium text-secondary">Certified Yoga Instructor</h2>
			</div>

			<div class="space-y-4 text-slate-600">
				<p>
					Liz Wyatt, BA, BEd, E-RYT 550, has over 25 years of yoga practice, teaching and teacher
					mentoring.
				</p>
				<p>
					With a professional background in education and fitness leadership, Liz brings her skills
					in teaching and her vast knowledge of yoga techniques and philosophy into every class.
					She's known for her respect for the yoga tradition, easy going manner, and ever-present
					sense of humour.
				</p>
				<p>
					“Slow and Subtle” is Liz's technique. Slow and mindful yoga is not the same thing as
					strong, physical exercise; it is a different practice grounded in ancient wisdom and
					modern neuroscience. Although you will notice gains in strength and flexibility, you will
					also become aware of the differences that you feel as you gradually bring your nervous
					system into balance. Whether you participate on a mat on the floor or sitting in a chair,
					think of “working in” instead of “working out”.
				</p>
			</div>

			<!-- Contact Information -->
			<div class="flex flex-row flex-wrap gap-4">
				<Button href="mailto:liz@example.com" variant="default" class="gap-2">
					<Mail class="h-4 w-4" />
					<span>liz@example.com</span>
				</Button>
				<Button href="tel:519-123-4567" variant="default" class="gap-2">
					<Phone class="h-4 w-4" />
					<span>519-123-4567</span>
				</Button>
				<Button href="https://www.instagram.com/lizwyatt_yogayou/" variant="default" class="gap-2">
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
				{#each ['200-Hour Yoga Teacher Training', 'Chair Yoga Certification', 'Senior Yoga Specialist', 'Mindfulness Meditation Certificate'] as certification}
					<div class="rounded-lg bg-slate-50 p-4">
						<p class="font-medium text-slate-700">{certification}</p>
					</div>
				{/each}
			</div>
		</Card.Content>
	</Card.Root>
</section>
