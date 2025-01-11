<script>
	import Button from '../ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { buttonVariants } from '$lib/components/ui/button/index';
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
				<Button variant="link" href="/about">About</Button>
			</li>
			<li>
				<Button variant="link" href="/">Pricing</Button>
			</li>
			<li>
				<Button variant="link" href="/">Location</Button>
			</li>
			<li>
				<Button variant="link" href="/">Lessons</Button>
			</li>
		</ul>
		<div class="flex lg:hidden">
			<DropdownMenu.Root>
				<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}
					><Menu /></DropdownMenu.Trigger
				>
				<DropdownMenu.Content class="mr-2 mt-1">
					<DropdownMenu.Group>
						<DropdownMenu.Item><a href="/">Lessons</a></DropdownMenu.Item>
						<DropdownMenu.Item><a href="/about">About</a></DropdownMenu.Item>
						<DropdownMenu.Item><a href="/">Pricing</a></DropdownMenu.Item>
						<DropdownMenu.Item><a href="/">Location</a></DropdownMenu.Item>
					</DropdownMenu.Group>
				</DropdownMenu.Content>
			</DropdownMenu.Root>
		</div>
	</div>
</nav>
