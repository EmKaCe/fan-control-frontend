<script lang="ts">
	import { ApiClient } from '$lib/api/client';
	import type { IndoorResponse } from '$lib/api/model/IndoorResponse';
	import CustomListPlaceholder from '$lib/components/CustomListPlaceholder.svelte';
	import IndoorDebug from '$lib/debug/IndoorDebug';
	import { Card, Listgroup, ListgroupItem } from 'flowbite-svelte';
	import { beforeUpdate } from 'svelte';
	import Error from './error.svelte';

	export let debug = false;
	export let timeout: number;
	let data: IndoorResponse;
	let interval: NodeJS.Timer;

	const getData = async () => {
		if (debug) {
			data = IndoorDebug;
		} else {
			interval = setInterval(async () => {
				data = await ApiClient.getClient().getIndoor();
			}, timeout);
			data = await ApiClient.getClient().getIndoor();
		}
	};

	beforeUpdate(() => {
		clearInterval(interval);
	});
</script>

<section class="w-full h-full flex justify-center">
	{#await getData()}
		<CustomListPlaceholder rows={5} />
	{:then}
		<Card class="text-primary-700 dark:text-slate-200 grow" size="md">
			<h5 class="mb-2 text-3xl font-bold tracking-tight pl-4">Innensensor</h5>
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
			</Listgroup>
			<div class="text-right text-slate-600 dark:text-slate-200">
				Daten vom
				{new Date(data.date).toLocaleString('de-DE', {
					day: '2-digit',
					month: '2-digit',
					year: 'numeric',
					hour: '2-digit',
					minute: '2-digit'
				})} Uhr
			</div>
		</Card>
	{:catch e}
		<Error error={e} />
	{/await}
</section>
