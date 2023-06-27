<script lang="ts">
	import { ApiClient } from '$lib/api/client';
	import type { OutdoorResponse } from '$lib/api/model/OutdoorResponse';
	import CustomListPlaceholder from '$lib/components/CustomListPlaceholder.svelte';
	import BatteryIndicator from '$lib/components/batteryIndicator.svelte';
	import { Card, Listgroup, ListgroupItem } from 'flowbite-svelte';

	export let debug = false;

	const getData = async () => {
		const data: OutdoorResponse = debug
			? {
					date: '2023-06-27T17:31:00Z',
					temperature: 20.351,
					relativeHumidity: 50.351,
					absoluteHumidity: 10.383,
					battery: 75.541
			  }
			: await ApiClient.getClient().getOutdoor();
		return data;
	};
</script>

<section class="w-full h-full flex justify-center">
	{#await getData()}
		<CustomListPlaceholder rows={5} />
	{:then data}
		<Card class="text-primary-700 dark:text-slate-200 grow" size="md">
			<h5 class="mb-2 text-3xl font-bold tracking-tight pl-4">Außensensor</h5>
			<Listgroup
				class="border-0 dark:!bg-transparent my-4 text-slate-700 dark:text-slate-300 h-full flex flex-col justify-center"
			>
				<ListgroupItem class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">Temperatur</p>
					</div>
					<div
						class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
					>
						{data.temperature.toFixed(2)} °C
					</div>
				</ListgroupItem>
				<ListgroupItem class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">Rel. Luftfeuchtigkeit</p>
					</div>
					<div
						class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
					>
						{data.relativeHumidity.toFixed(2)}%
					</div>
				</ListgroupItem>
				<ListgroupItem class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">Abs. Luftfeuchtigkeit</p>
					</div>
					<div
						class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
					>
						{data.absoluteHumidity.toFixed(2)} g/m³
					</div>
				</ListgroupItem>
				<ListgroupItem class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">Akku</p>
					</div>
					<div
						class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
					>
						<BatteryIndicator level={data.battery} />
					</div>
				</ListgroupItem>
			</Listgroup>
			<div class="text-right text-slate-600 dark:text-slate-200">
				Aktualisiert am:
				{new Date(data.date).toLocaleString('de-DE', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				})} Uhr
			</div>
		</Card>
	{/await}
</section>
