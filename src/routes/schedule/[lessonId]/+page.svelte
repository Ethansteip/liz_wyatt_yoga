<script lang="ts">
	import { page } from '$app/state';
	import { schedule, yogaDescriptions, createCalendarEvent } from '$lib/data';
	import * as Card from '$lib/components/ui/card/index';
	import { MapPin, Clock, Calendar, DollarSign } from 'lucide-svelte';
	import Button from '$lib/components/ui/button/button.svelte';

	import stAgathaMap from '$lib/assets/st-agatha-map.png';
	import wmrcMap from '$lib/assets/wmrc-map.png';
	import rimMap from '$lib/assets/rim-map.png';

	const mapImages = {
		'st-agatha': stAgathaMap,
		wmrc: wmrcMap,
		rim: rimMap
	};

	const lessonId = parseInt(page.params.lessonId);
	const session = schedule.find((s) => s.id === lessonId);

	const LESSON_DURATION = '60 minutes';
	const LESSON_PRICE = '$15 per class';
</script>

{#if session}
	<div class="container mx-auto px-4 py-8">
		<Card.Root class="mx-auto max-w-3xl">
			<Card.Header>
				<Card.Title class="text-3xl font-bold text-primary">{session.class}</Card.Title>
				<Card.Description class="flex flex-col gap-4 pt-4">
					<div class="flex items-center gap-2 text-muted-foreground">
						<Calendar class="h-5 w-5" />
						<span>{session.weekday}</span>
					</div>
					<div class="flex items-center gap-2 text-muted-foreground">
						<Clock class="h-5 w-5" />
						<span>{session.time} ({LESSON_DURATION})</span>
					</div>
					<div class="flex items-center gap-2 text-muted-foreground">
						<MapPin class="h-5 w-5" />
						<span>{session.location}</span>
					</div>
					<div class="flex items-center gap-2 text-muted-foreground">
						<DollarSign class="h-5 w-5" />
						<span>{LESSON_PRICE}</span>
					</div>
				</Card.Description>
			</Card.Header>

			<Card.Content class="space-y-6">
				<div>
					<h3 class="mb-2 text-xl font-semibold text-primary">About {session.class}</h3>
					<p class="text-muted-foreground">
						{yogaDescriptions[session.class as keyof typeof yogaDescriptions]}
					</p>
				</div>

				<div class="aspect-video overflow-hidden rounded-lg">
					<a
						href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
							session.address
						)}`}
						target="_blank"
						rel="noopener noreferrer"
						class="block h-full w-full"
					>
						<img
							src={mapImages[session.mapLocation as keyof typeof mapImages]}
							alt={`Map preview for ${session.location}`}
							class="h-full w-full object-cover transition-transform hover:scale-105"
						/>
					</a>
				</div>

				<div class="flex flex-col gap-4 sm:flex-row sm:justify-between">
					<Button variant="outline" href="/schedule">Back to Schedule</Button>
				</div>
			</Card.Content>
		</Card.Root>
	</div>
{:else}
	<div class="flex h-screen items-center justify-center">
		<p class="text-xl text-muted-foreground">Lesson not found</p>
	</div>
{/if}
