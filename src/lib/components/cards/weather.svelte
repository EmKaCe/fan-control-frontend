<script lang="ts">
	import CustomListPlaceholder from '$lib/components/CustomListPlaceholder.svelte';
	import { ApiClient } from '$lib/api/client';
	import type { WeatherResponse } from '$lib/api/model/weather/WeatherResponse';
	import settings from '$lib/stores/settings';
	import type { SettingsData } from '$lib/stores/model/SettingsData';
	import { Card } from 'flowbite-svelte';
	import { Humidity, Thermometer } from 'svelte-weather';
	import WeatherIcon from '../weatherIcon.svelte';

	let currentSettings: SettingsData = JSON.parse($settings);
	let zip = currentSettings.config.zipCode;
	export let debug = false;

	const getData = async () => {
		const data: WeatherResponse = debug
			? {
					current: {
						coord: {
							lon: 13.3873,
							lat: 52.5161
						},
						weather: [
							{
								id: 800,
								main: 'Clear',
								description: 'clear sky',
								icon: '01d'
							}
						],
						base: 'stations',
						main: {
							temp: 17.95,
							feelsLike: 17.6,
							tempMin: 15.61,
							tempMax: 19.99,
							pressure: 1003,
							humidity: 69,
							seaLevel: 0,
							grndLevel: 0
						},
						visibility: 10000,
						wind: {
							speed: 4.47,
							deg: 290,
							gust: 0.0
						},
						rain: null,
						clouds: {
							all: 0
						},
						dt: 1687889415,
						sys: {
							type: 2,
							id: 2009543,
							country: 'DE',
							sunrise: 1687833907,
							sunset: 1687894411
						},
						timezone: 7200,
						id: 0,
						name: 'Berlin',
						cod: 200
					},
					forecast: {
						cod: '200',
						message: 0,
						cnt: 3,
						list: [
							{
								dt: 1687899600,
								main: {
									temp: 16.8,
									feelsLike: 16.47,
									tempMin: 14.49,
									tempMax: 16.8,
									pressure: 1007,
									humidity: 74,
									seaLevel: 1007,
									grndLevel: 1010
								},
								weather: [
									{
										id: 500,
										main: 'Rain',
										description: 'light rain',
										icon: '10n'
									}
								],
								clouds: {
									all: 24
								},
								wind: {
									speed: 3.67,
									deg: 289,
									gust: 10.73
								},
								visibility: 10000,
								pop: 0.65,
								rain: {
									_1h: 0.0
								},
								sys: {
									pod: 'n'
								},
								dtTxt: '2023-06-27 21:00:00'
							},
							{
								dt: 1687910400,
								main: {
									temp: 14.66,
									feelsLike: 14.3,
									tempMin: 13.01,
									tempMax: 14.66,
									pressure: 1011,
									humidity: 81,
									seaLevel: 1011,
									grndLevel: 1010
								},
								weather: [
									{
										id: 802,
										main: 'Clouds',
										description: 'scattered clouds',
										icon: '03n'
									}
								],
								clouds: {
									all: 25
								},
								wind: {
									speed: 4.46,
									deg: 288,
									gust: 11.51
								},
								visibility: 10000,
								pop: 0.51,
								rain: null,
								sys: {
									pod: 'n'
								},
								dtTxt: '2023-06-28 00:00:00'
							},
							{
								dt: 1687921200,
								main: {
									temp: 11.95,
									feelsLike: 11.58,
									tempMin: 11.95,
									tempMax: 11.95,
									pressure: 1015,
									humidity: 91,
									seaLevel: 1015,
									grndLevel: 1010
								},
								weather: [
									{
										id: 802,
										main: 'Clouds',
										description: 'scattered clouds',
										icon: '03d'
									}
								],
								clouds: {
									all: 46
								},
								wind: {
									speed: 4.66,
									deg: 282,
									gust: 11.97
								},
								visibility: 10000,
								pop: 0.0,
								rain: null,
								sys: {
									pod: 'd'
								},
								dtTxt: '2023-06-28 03:00:00'
							}
						],
						city: {
							id: 0,
							name: 'Berlin',
							coord: {
								lon: 13.3873,
								lat: 52.5161
							},
							country: 'DE',
							population: 0,
							timezone: 7200,
							sunrise: 1687833907,
							sunset: 1687894411
						}
					}
			  }
			: await ApiClient.getClient().getWeather();
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
					<span class="font-semibold mt-1 text-primary-600">{zip}, {data.current.name}</span>
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
				Aktualisiert am:
				{new Date(data.current.dt * 1000).toLocaleString('de-DE', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				})}
			</div>
		</Card>
	{:catch}
		<Card class="text-red-600 dark:text-red-500 grow" size="md">
			<h5 class="mb-2 text-2xl font-bold tracking-tight pl-4">An error occured...</h5>
		</Card>
	{/await}
</section>
