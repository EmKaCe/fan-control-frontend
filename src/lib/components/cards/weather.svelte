<script lang="ts">
	import CustomListPlaceholder from '$lib/components/CustomListPlaceholder.svelte';
	import { ApiClient } from '$lib/api/client';
	import type { WeatherResponse } from '$lib/api/model/weather/WeatherResponse';
	import { Card } from 'flowbite-svelte';
	import { Humidity, Thermometer } from 'svelte-weather';
	import WeatherIcon from '../weatherIcon.svelte';
	import WeatherDebug from '$lib/debug/WeatherDebug';
	import Error from './error.svelte';
	import { onMount } from 'svelte';
	import DataUpdated from '../DataUpdated.svelte';

	export let zipCode: number;
	export let debug = false;

	let mounted = false;

	onMount(() => {
		mounted = true;
	});


	const getData = async () => {
		while (!mounted) {
			await new Promise((resolve) => setTimeout(resolve, 100));
		}
		const data: WeatherResponse = debug ? WeatherDebug : await ApiClient.getClient().getWeather();
		return data;
	};
</script>

<section class="w-full h-full flex justify-center">
	{#await getData()}
		<CustomListPlaceholder rows={5} />
	{:then data}
		<Card class="text-primary-700 dark:text-slate-200 grow" size="md">
			<!-- Temp, Place & Icon -->
			<div class="flex justify-between">
				<div class="flex flex-col pl-4">
					<div class="flex flex-row justify-between">
						<span class="text-3xl font-bold">{data.current.main?.temp?.toFixed(0)}°C</span>
						<div class="flex items-center text-sky-700 dark:text-sky-300 text-lg pl-4">
							{data.current?.main?.humidity}<Humidity class="w-8 h-8" />
						</div>
					</div>
					<span class="font-semibold mt-1 text-primary-600">{zipCode}, {data.current.name}</span>
				</div>
				<WeatherIcon icon={data.current.weather[0].icon} size={16} />
			</div>
			<div class="flex justify-around mt-12">
				{#each data.forecast.list as f, i}
					{@const date = new Date(f.dt * 1000)}
					<div class="flex flex-col items-center text-primary-600">
						<span class="font-semibold text-lg">
							{date.getHours().toLocaleString('de-DE', { minimumIntegerDigits: 2 })}:{date
								.getMinutes()
								.toLocaleString('de-DE', { minimumIntegerDigits: 2 })}
						</span>
						<WeatherIcon icon={f.weather[0].icon} size={16} spacing="my-2" />
						<div class="flex items-center font-semibold text-lg">
							{f.main.temp?.toFixed(0)}°C
							<Thermometer class="w-8 h-8" />
						</div>
						<div class="flex items-center text-sky-700 dark:text-sky-300 pl-3 text-lg">
							{f.main.humidity}
							<Humidity class="w-8 h-8" />
						</div>
					</div>
					{#if i < data.forecast.list.length - 1}
						<hr class="h-full border border-slate-400 dark:border-primary-400" />
					{/if}
				{/each}
			</div>
			<div class="mt-6 text-right text-slate-600 dark:text-slate-200">
				<DataUpdated date={data.current.dt * 1000} />
		</Card>
	{:catch e}
		<Error error={e} />
	{/await}
</section>
