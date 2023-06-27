<script lang="ts">
	import { ApiClient } from '$lib/api/client';
	import Indoor from '$lib/components/cards/indoor.svelte';
	import Outdoor from '$lib/components/cards/outdoor.svelte';
	import Ventilation from '$lib/components/cards/ventilation.svelte';
	import Weather from '$lib/components/cards/weather.svelte';

	ApiClient.getClient("127.0.0.1:3002");
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

<Indoor debug={true} />
<Outdoor debug={true} />
<Weather debug={true} />
<Ventilation debug={true} />