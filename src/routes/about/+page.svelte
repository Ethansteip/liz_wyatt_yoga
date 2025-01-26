<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Instagram, Mail, Phone } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';
</script>

<section class="mx-auto flex w-full max-w-[1100px] flex-col gap-10 p-5 py-10 lg:py-20">
	<!-- Hero Section -->
	<div class="flex flex-col items-center gap-10 lg:flex-row lg:items-start lg:gap-20">
		<!-- Image -->
		<div class="w-full lg:w-1/2">
			<div class="aspect-square w-full overflow-hidden rounded-xl bg-slate-200 shadow-lg">
				<p class="flex h-full items-center justify-center text-slate-600">Profile Image</p>
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
					With over 15 years of experience teaching yoga, I've dedicated my life to helping others
					find peace, strength, and flexibility through mindful movement.
				</p>
				<p>
					My teaching philosophy centers on creating an inclusive and welcoming environment where
					students of all ages and abilities can explore yoga at their own pace.
				</p>
				<p>
					I specialize in gentle "chair" and "mat" yoga, making the practice accessible to everyone,
					regardless of their fitness level or mobility constraints.
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
