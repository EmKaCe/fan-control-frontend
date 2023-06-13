<script lang="ts">
	import { Card } from 'flowbite-svelte';
	import { DayCloudy, DaySunny, Humidity, Raindrop } from 'svelte-weather';

	export let data = {
		temperature: 30,
		humidity: 45,
		city: 'Sankt Augustin',
		zip: 53757,
		forecast: [
			{
				temperatue: 31,
				time: '13:00',
				humidity: 57
			},
			{
				temperatue: 28,
				time: '16:00',
				humidity: 60
			},
			{
				temperatue: 24,
				time: '19:00',
				humidity: 40
			}
		]
	};
</script>

<section class="w-full flex justify-center">
	<Card class="text-primary-700 dark:text-slate-200 grow" size="md">
		<!-- Temp, Place & Icon -->
		<div class="flex justify-between">
			<div class="flex flex-col">
				<div class="flex flex-row justify-between">
					<span class="text-3xl font-bold">{data.temperature}°C</span>
					<div class="flex items-center text-gray-600 text-lg">
						{data.humidity}<Humidity class="w-8 h-8" />
					</div>
				</div>
				<span class="font-semibold mt-1 text-primary-500">{data.zip}, {data.city}</span>
			</div>
			<DaySunny class="text-yellow-400 h-16 w-16" />
		</div>

		<div class="flex justify-around mt-12">
			{#each data.forecast as forecast}
				<div class="flex flex-col items-center">
					<span class="font-semibold text-lg">{forecast.temperatue}°C</span>
					<DayCloudy class="h-16 w-16 text-gray-500 my-2" />
					<span class="font-semibold text-lg">{forecast.time}</span>
					<div class="flex items-center text-gray-600 text-lg">
						{forecast.humidity}
						<Humidity class="w-8 h-8" />
					</div>
				</div>
			{/each}
		</div>
	</Card>
</section>
