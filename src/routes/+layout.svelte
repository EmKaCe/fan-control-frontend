<script>
	import '../app.postcss';
	import { Footer, FooterCopyright, FooterIcon, Tooltip } from 'flowbite-svelte';
	import { CircleStack, CodeBracket } from 'svelte-heros-v2';
</script>

<div class="app">
	<main>
		<slot />
	</main>

	<Footer footerType="socialmedia">
		<div class="md:flex md:justify-between">
			<FooterCopyright by="Leo Tietz & Emre Cetin" year={2023} />
			<div class="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
				<FooterIcon
					href="https://github.com/EmKaCe/fan-control-frontend"
					class="text-gray-400 hover:text-gray-900"
				>
					<CodeBracket />
				</FooterIcon>
				<Tooltip>Front-End on GitHub</Tooltip>
				<FooterIcon
					href="https://github.com/U1F984/fan-control-backend"
					class="text-gray-400 hover:text-gray-900"
				>
					<CircleStack />
				</FooterIcon>
				<Tooltip>Backend on GitHub</Tooltip>
			</div>
		</div>
	</Footer>
</div>
