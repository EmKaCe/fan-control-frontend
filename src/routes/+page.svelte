<script lang="ts">
	import Sensor from '$lib/components/cards/sensor.svelte';
	import Ventilation from '$lib/components/cards/ventilation.svelte';
	import Weather from '$lib/components/cards/weather.svelte';

	let innensensorList = [
		{
			name: 'Temperatur',
			value: 32.351,
			unit: '°C'
		},
		{
			name: 'Rel. Luftfeuchtigkeit',
			value: 50.724,
			unit: '%'
		},
		{
			name: 'Abs. Luftfeuchtigkeit',
			value: 16.924,
			unit: 'g/m³'
		}
	];
	let aussensensorList = [
		{
			name: 'Temperatur',
			value: 32.124,
			unit: '°C'
		},
		{
			name: 'Rel. Luftfeuchtigkeit',
			value: 55.351,
			unit: '%'
		},
		{
			name: 'Abs. Luftfeuchtigkeit',
			value: 20.7342,
			unit: 'g/m³'
		},
		{
			name: 'Akku',
			level: 69.2423
		}
	];
</script>

<svelte:head>
	<title>IoT Dashboard</title>
	<meta name="description" content="IoT Dashboard" />
	<script lang="ts">
		import theme from '$lib/stores/theme';

		$: darkTheme = $theme === 'dark';
		if (darkTheme) {
			document.documentElement.classList.add('dark');
		} else {
			document.documentElement.classList.remove('dark');
		}
	</script>
</svelte:head>

<Sensor title="Innensensor" list={innensensorList} />
<Sensor title="Außensensor" list={aussensensorList} />
<Weather />
<Ventilation />
