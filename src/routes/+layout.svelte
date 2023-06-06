<script>
	import '../app.postcss';
	import {
		Button,
		ButtonGroup,
		DarkMode,
		Footer,
		FooterCopyright,
		FooterIcon,
		NavBrand,
		Navbar,
		Tooltip
	} from 'flowbite-svelte';
	import { CircleStack, CodeBracket, Cog, Moon, Sun } from 'svelte-heros-v2';
	const navbarClass = 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 px-4 sm:px-10 py-2.5 w-full';
	const navButtonClass = 'text-center font-medium focus:ring-2 focus:z-10 size inline-flex items-center justify-center px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600 focus:ring-gray-200 dark:focus:ring-gray-700 border-l-0 first:border-l first:rounded-l-lg last:rounded-r-lg';
	const footerClass = 'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700';
</script>

<div class="app flex flex-col h-screen">
	<header class="drop-shadow">
		<Navbar class={navbarClass}>
			<NavBrand>
				<span class="self-center whitespace-nowrap text-xl font-semibold dark:text-white"
					>IoT Dashboard</span
				>
			</NavBrand>
			<div class="flex md:order-2">
				<ButtonGroup>
					<DarkMode btnClass={navButtonClass}>
						<span class="flex items-center" slot="lightIcon">
							<Sun /><span class="hidden md:block">Helles Design</span>
						</span>
						<span class="flex items-center" slot="darkIcon">
							<Moon /><span class="hidden md:block">Dunkeles Design</span>
						</span>
					</DarkMode>
					<Button>
						<Cog />
						<span class="hidden md:block">Einstellungen</span>
					</Button>
				</ButtonGroup>
			</div>
		</Navbar>
	</header>
	<main class="flex-grow container mx-auto p-10 md:px-12">
		<slot />
	</main>
	<Footer class={footerClass} footerType="socialmedia">
		<div class="md:flex md:justify-between">
			<FooterCopyright by="Leo Tietz & Emre Cetin" year={2023} />
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<FooterIcon
					href="https://github.com/EmKaCe/fan-control-frontend"
					class="text-gray-400 hover:text-gray-900"
				>
					<CodeBracket />
				</FooterIcon>
				<Tooltip>Front-End auf GitHub</Tooltip>
				<FooterIcon
					href="https://github.com/U1F984/fan-control-backend"
					class="text-gray-400 hover:text-gray-900"
				>
					<CircleStack />
				</FooterIcon>
				<Tooltip>Backend auf GitHub</Tooltip>
			</div>
		</div>
	</Footer>
</div>
