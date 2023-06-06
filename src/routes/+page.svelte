<script>
	import { Card } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>IoT Dashboard</title>
	<meta name="description" content="IoT Dashboard" />
	<script>
		if (
			localStorage.getItem('color-theme') === 'dark' ||
			(!('color-theme' in localStorage) &&
				window.matchMedia('(prefers-color-scheme: dark)').matches)
		) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<section class="grid md:grid-cols-2 md:grid-rows-2 gap-4 place-items-center h-full">
	{#each [0, 1, 2, 3] as e}
		<Card class="w-full">
			<h5>Test</h5>
			<p>test card</p>
		</Card>
	{/each}
</section>
