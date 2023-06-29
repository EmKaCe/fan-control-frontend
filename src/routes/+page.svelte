<script lang="ts">
	import Indoor from '$lib/components/cards/indoor.svelte';
	import Outdoor from '$lib/components/cards/outdoor.svelte';
	import Ventilation from '$lib/components/cards/ventilation.svelte';
	import Weather from '$lib/components/cards/weather.svelte';
</script>

<svelte:head>
	<title>IoT Dashboard</title>
	<meta name="description" content="IoT Dashboard" />
</svelte:head>

<div class="grid md:grid-cols-2 md:grid-rows-2 gap-x-4 gap-y-10 place-items-center h-full">
	<Indoor debug={true} />
	<Outdoor debug={true} />
	<Weather debug={true} />
	<Ventilation debug={true} />
</div>
