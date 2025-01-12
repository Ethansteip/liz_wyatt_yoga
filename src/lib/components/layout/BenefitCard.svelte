<script lang="ts">
	let { title, description, icon } = $props();
</script>

<div class="relative flex h-auto w-full flex-col gap-1 rounded-xl bg-white p-5 shadow-md">
	<div
		class="absolute -top-4 right-3 flex h-14 w-14 items-center justify-center rounded-xl bg-primary lg:right-4"
	>
		{@render icon()}
	</div>
	<p class="text-lg font-black tracking-wide text-secondary">{@render title()}</p>
	<p class="tracking-wider text-slate-500">{@render description()}</p>
</div>
