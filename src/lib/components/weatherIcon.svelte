<script lang="ts">
	import {
		Alien,
		Cloud,
		Cloudy,
		DayCloudy,
		DayFog,
		DayRain,
		DayShowers,
		DaySnow,
		DaySunny,
		DayThunderstorm,
		NightClear,
		NightFog,
		NightPartlyCloudy,
		NightRain,
		NightShowers,
		NightSnow,
		NightThunderstorm,
	} from 'svelte-weather';

	export let icon: String;
	export let size: number;
    export let spacing: string = "my-auto";

	let iconClass = `h-${size} w-${size} ${spacing}`;
</script>

{#if icon == '01d'}
	<DaySunny class="text-yellow-400 dark:text-yellow-300 {iconClass}" />
{:else if icon == '01n'}
	<NightClear class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '02d'}
	<DayCloudy class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '02n'}
	<NightPartlyCloudy class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '03d' || icon == '03n'}
	<Cloud class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '04d' || icon == '04n'}
	<Cloudy class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '09d'}
	<DayShowers class="text-blue-400 dark:text-blue-300 {iconClass}" />
{:else if icon == '09n'}
	<NightShowers class="text-blue-400 dark:text-blue-300 {iconClass}" />
{:else if icon == '10d'}
	<DayRain class="text-blue-500 dark:text-blue-400 {iconClass}" />
{:else if icon == '10n'}
	<NightRain class="text-blue-500 dark:text-blue-400 {iconClass}" />
{:else if icon == '11d'}
	<DayThunderstorm class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '11n'}
	<NightThunderstorm class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '13d'}
	<DaySnow class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '13n'}
	<NightSnow class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '50d'}
	<DayFog class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else if icon == '50n'}
	<NightFog class="text-gray-600 dark:text-slate-100 {iconClass}" />
{:else}
	<Alien class="text-violet-600 dark:text-violet-400 {iconClass}" />
{/if}
