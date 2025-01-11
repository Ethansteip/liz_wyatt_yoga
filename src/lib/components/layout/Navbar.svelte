<script>
	import Button from '../ui/button/button.svelte';
	import { Brush, Menu } from 'lucide-svelte';
</script>

<nav class="flex h-16 w-full items-center px-5 lg:shadow">
	<div class="w-1/3 sm:w-1/3">
		<Button variant="ghost" size="icon" href="/">
			<Brush />
		</Button>
	</div>
	<div class="justify center flex w-1/2 items-center justify-center font-bold sm:w-1/3">
		<h1 class="tracking-wide">
			<a href="/">Liz Wyatt Yoga</a>
		</h1>
	</div>
	<div class="flex w-1/3 items-center justify-end sm:w-1/3">
		<ul class="hidden lg:flex">
			<li>
				<Button variant="link">About</Button>
			</li>
			<li>
				<Button variant="link">Pricing</Button>
			</li>
			<li>
				<Button variant="link">Location</Button>
			</li>
			<li>
				<Button variant="link">Lessons</Button>
			</li>
		</ul>
		<Button variant="ghost" size="icon" class="flex lg:hidden">
			<Menu />
		</Button>
	</div>
</nav>
