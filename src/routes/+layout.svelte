<script lang="ts">
	import { page } from '$app/stores';
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
	import { ChartBarSquare, CircleStack, CodeBracket, Cog, Home, Moon, Sun } from 'svelte-heros-v2';
	import SettingsModal from '$lib/components/settings/settingsModal.svelte';
	import SettingsToast from '$lib/components/settings/settingsToast.svelte';
	import { ApiClient } from '$lib/api/client';
	const navbarClass =
		'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 px-4 sm:px-10 py-2.5 w-full';
	const navButtonClass =
		'text-center font-medium focus:ring-2 focus:z-10 size inline-flex items-center justify-center px-4 py-2 text-sm text-gray-900 bg-white border border-gray-200 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus:text-primary-700 dark:focus:text-white dark:hover:text-white dark:bg-gray-700 dark:text-white dark:border-gray-700 dark:hover:border-gray-600 dark:hover:bg-gray-600 focus:ring-gray-200 dark:focus:ring-gray-700 border-l-0 first:border-l first:rounded-l-lg last:rounded-r-lg';
	const footerClass =
		'bg-white dark:bg-gray-900 text-gray-700 dark:text-gray-200 border-gray-100 dark:border-gray-700 drop-shadow-[0_-1px_2px_rgba(0,0,0,0.1)]';
	let settingsOpen = false;

	let showToast: (display: 'success' | 'error' | '', message: String) => void;

	// TODO: Replace this with API from Settings, open SettingsModal if no API is set
	ApiClient.getClient("http://127.0.0.1:3002");
</script>

<div class="app flex flex-col h-screen">
	<SettingsToast bind:showToast />
	<header class="drop-shadow">
		<Navbar class={navbarClass}>
			<NavBrand href="/">
				<span
					class="self-center whitespace-nowrap text-xl font-semibold text-primary-700 dark:text-white"
				>
					{#if $page.route.id === '/stats'}
						Statistiken
					{:else}
						IoT Dashboard
					{/if}
				</span>
			</NavBrand>
			<div class="flex md:order-2">
				<ButtonGroup>
					<DarkMode btnClass={navButtonClass}>
						<span class="flex items-center" slot="lightIcon">
							<Sun /><span class="pl1 hidden md:block">Helles Design</span>
						</span>
						<span class="flex items-center" slot="darkIcon">
							<Moon /><span class="pl-1 hidden md:block">Dunkeles Design</span>
						</span>
					</DarkMode>
					<Button
						on:click={() => {
							settingsOpen = true;
						}}
					>
						<Cog />
						<span class="pl-1 hidden md:block">Einstellungen</span>
					</Button>
					{#if $page.route.id === '/stats'}
						<Button href="/">
							<Home />
							<span class="pl-1 hidden md:block">Start</span>
						</Button>
					{:else}
						<Button href="/stats">
							<ChartBarSquare />
							<span class="pl-1 hidden md:block">Statistiken</span>
						</Button>
					{/if}
				</ButtonGroup>
			</div>
		</Navbar>
	</header>
	<main class="flex-grow container mx-auto p-10 md:px-12">
		<slot />
	</main>
	<SettingsModal bind:open={settingsOpen} toast={showToast} />
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
