<script>
	import Button from '../ui/button/button.svelte';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index';
	import { buttonVariants } from '$lib/components/ui/button/index';
	import { Menu, CalendarCheck2, Book } from 'lucide-svelte';
</script>

<nav class="flex h-[4rem] w-full items-center px-5 lg:shadow">
	<div class="mx-auto flex w-full max-w-[1100px] items-center justify-center">
		<div class="w-1/4 sm:w-1/3">
			<img src="src/lib/assets/Aunt-liz-logo.png" class="w-10 lg:w-14" alt="logo" />
		</div>
		<div class="justify center flex w-1/2 items-center justify-center sm:w-1/3">
			<h1 class="text-xl font-black tracking-wide text-primary lg:text-2xl">
				<a href="/">Liz Wyatt Yoga</a>
			</h1>
		</div>
		<div class="flex w-1/4 items-center justify-end sm:w-1/3">
			<ul class="hidden lg:flex">
				<li>
					<Button variant="link" href="/about">About</Button>
				</li>
				<li>
					<Button variant="link" href="/schedule">Schedule</Button>
				</li>
			</ul>
			<div class="flex lg:hidden">
				<DropdownMenu.Root>
					<DropdownMenu.Trigger class={buttonVariants({ variant: 'ghost', size: 'icon' })}
						><Menu /></DropdownMenu.Trigger
					>
					<DropdownMenu.Content class="mr-2 mt-1">
						<DropdownMenu.Group>
							<DropdownMenu.Item
								><a
									href="/schedule"
									class="flex w-full flex-row items-center justify-between text-lg"
								>
									<p>Schedule</p>
									<CalendarCheck2 />
								</a></DropdownMenu.Item
							>
							<DropdownMenu.Item
								><a href="/about" class="flex w-full flex-row items-center justify-between text-lg">
									<p>About</p>
									<Book /></a
								></DropdownMenu.Item
							>
						</DropdownMenu.Group>
					</DropdownMenu.Content>
				</DropdownMenu.Root>
			</div>
		</div>
	</div>
</nav>
