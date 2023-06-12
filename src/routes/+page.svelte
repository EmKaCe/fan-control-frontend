<script>
	import Sensor from '$lib/cards/sensor.svelte';
	import { Card } from 'flowbite-svelte';
	let aussensensorList = [
		{
			name: 'Test',
            value: undefined
		},
		{
			name: 'Temperatur',
			value: '32°C'
		},
		{
			name: 'Rel. Luftfeuchtigkeit',
			value: '50%'
		},
		{
			name: 'Abs. Luftfeuchtigkeit',
			value: '16.9 g/m³'
		}
	];
	let innensensorList = [
		{
			name: 'Temperatur',
			value: '34°C'
		},
		{
			name: 'Rel. Luftfeuchtigkeit',
			value: '55%'
		},
		{
			name: 'Abs. Luftfeuchtigkeit',
			value: '20.7 g/m³'
		},
		{
			name: 'Akku',
			value: '69%'
		}
	];
	innensensorList = undefined;
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

<Sensor title="Außensensor" list={aussensensorList} />
<Sensor title="Innensensor" list={innensensorList} />
{#each [2, 3] as e}
	<section class="w-full">
		<Card>
			<h5>Test</h5>
			<p>test card</p>
		</Card>
	</section>
{/each}
