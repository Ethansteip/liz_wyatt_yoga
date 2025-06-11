<script lang="ts">
	import { schedule } from '$lib/data';
	import * as Card from '$lib/components/ui/card/index';
	import { ChevronRight } from 'lucide-svelte';

	import stAgathaMap from '$lib/assets/st-agatha-map.png';
	import wmrcMap from '$lib/assets/wmrc-map.png';
	import rimMap from '$lib/assets/rim-map.png';

	const mapImages = {
		'st-agatha': stAgathaMap,
		wmrc: wmrcMap,
		rim: rimMap
	};

	const yogaDescriptions = {
		'Chair Yoga':
			'A gentle form of yoga that can be done while seated. Perfect for seniors, those with limited mobility, or anyone looking for a more accessible yoga practice.',
		'Mat Yoga':
			'Traditional yoga practice performed on a yoga mat. Includes standing and floor poses to improve flexibility, strength, and balance.'
	};
</script>

<svelte:head>
        <title>Yoga Class Schedule - Liz Wyatt Yoga in Kitchener-Waterloo</title>
        <meta
                name="description"
                content="View our weekly yoga class schedule in Waterloo, Ontario. Classes available at Waterloo Memorial Recreation Complex, RIM Park, and St. Agatha Community Centre."
        />
        <meta
                name="keywords"
                content="yoga Waterloo schedule, yoga classes, Kitchener-Waterloo yoga schedule, chair yoga, mat yoga, St. Agatha yoga, RIM Park yoga, WMRC yoga, accessible yoga"
        />
        <link rel="canonical" href="https://liz-wyatt-yoga.com/schedule" />
        <meta property="og:title" content="Yoga Class Schedule" />
        <meta property="og:description" content="View our weekly yoga class schedule in Waterloo, Ontario." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://liz-wyatt-yoga.com/schedule" />
</svelte:head>

<div class="container mx-auto px-4 py-8">
	<h1 class="mb-8 text-4xl font-bold text-primary">Weekly Yoga Schedule</h1>

	<div class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
		{#each schedule as session}
			<Card.Root class="flex flex-col overflow-hidden">
				<Card.Header>
					<Card.Title>
						<div class="flex w-full items-center justify-between text-xl text-primary">
							<h3>{session.class}</h3>
							<a class="flex items-center text-sm font-medium" href={`/schedule/${session.id}`}>
								Details
								<ChevronRight class="w-4" />
							</a>
						</div>
					</Card.Title>
					<Card.Description class="text-muted-foreground">
						{session.weekday}
					</Card.Description>
				</Card.Header>
				<Card.Content class="flex flex-1 flex-col space-y-4">
					<div class="min-h-[100px]">
						<p class="font-semibold">{session.time}</p>
						<p class="text-sm text-muted-foreground">{session.address}</p>
					</div>

					<div class="mt-auto aspect-square overflow-hidden rounded-lg bg-muted">
						<a href="/schedule/{session.id}" class="block h-full w-full">
							<img
								src={session.image}
								alt="People doing {session.class}"
								loading="lazy"
								class="h-full w-auto transition-transform hover:scale-105"
							/>
						</a>
					</div>
				</Card.Content>
			</Card.Root>
		{/each}
	</div>
</div>
