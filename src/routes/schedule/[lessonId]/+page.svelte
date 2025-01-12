<script lang="ts">
	import { page } from '$app/state';

	let lessonId = page.params.lessonId;
</script>

<section class="flex h-screen w-full items-center justify-center p-5">
	<h1 class="text-primary">
		Welcome to the lesson Id page: {lessonId} - we'll eventually be able to view a specific lesson's
		details here.
	</h1>
</section>
