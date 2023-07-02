<script lang="ts">
	import Indoor from '$lib/components/cards/indoor.svelte';
	import Outdoor from '$lib/components/cards/outdoor.svelte';
	import Ventilation from '$lib/components/cards/ventilation.svelte';
	import Weather from '$lib/components/cards/weather.svelte';
	import type { SettingsData } from '$lib/stores/model/SettingsData';
	import settings from '$lib/stores/settings';
	
	let currentSettings: SettingsData = JSON.parse($settings);
	let pollingRate = currentSettings.config.pollingRateWeb;
	let zipCode = currentSettings.config.zipCode;

	settings.subscribe((value) => {
		currentSettings = JSON.parse(value);
		pollingRate = currentSettings.config.pollingRateWeb;
		zipCode = currentSettings.config.zipCode;
	})
</script>

<svelte:head>
	<title>IoT Dashboard</title>
	<meta name="description" content="IoT Dashboard" />
</svelte:head>

<div class="grid md:grid-cols-2 md:grid-rows-2 gap-x-4 gap-y-10 place-items-center h-full">
	<Indoor bind:timeout={pollingRate} />
	<Outdoor bind:timeout={pollingRate} />
	<Weather bind:zipCode={zipCode} />
	<Ventilation bind:timeout={pollingRate} />
</div>
