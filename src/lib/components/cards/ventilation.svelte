<script lang="ts">
	import { ApiClient } from '$lib/api/client';
	import { Card, Indicator, Listgroup, ListgroupItem } from 'flowbite-svelte';
	import type { StateResponse } from '$lib/api/model/StateResponse';
	import CustomListPlaceholder from '../CustomListPlaceholder.svelte';

	export let debug = false;

	const getData = async () => {
		const data: StateResponse = debug
			? {
					fanDutyCycle: 67.872,
					windowOpen: false,
					nightModeConfig: {
						maxDutyCycle: 70,
						startHour: 22,
						endHour: 6
					}
			  }
			: await ApiClient.getClient().getState();
		return data;
	};
</script>

<section class="w-full h-full flex justify-center">
	{#await getData()}
		<CustomListPlaceholder rows={5} />
	{:then data}
		<Card class="text-primary-700 dark:text-slate-200 grow" size="md">
			<div class="flex justify-between">
				<div class="flex flex-col pl-4">
					<div class="flex flex-row justify-between">
						<span class="text-3xl font-bold">Lüftung</span>
					</div>
					<div class="flex flew-row items-center">
						<div class="flex">
							<Indicator
								class="absolute inline animate-ping"
								color={data.fanDutyCycle > 0 ? 'green' : 'red'}
							/>
							<Indicator class="relative inline" color={data.fanDutyCycle > 0 ? 'green' : 'red'} />
						</div>
						<span class="text-lg pl-1">Status: {data.fanDutyCycle > 0 ? 'An' : 'Aus'}</span>
					</div>
				</div>
			</div>
			<Listgroup
				class="border-0 dark:!bg-transparent my-4 dark:text-slate-300 h-full flex flex-col justify-center"
			>
				<ListgroupItem>
					<div class="flex items-center space-x-4">
						<div class="flex-1 min-w-0">
							<p class="text-xl">Geschwindigkeit</p>
						</div>
						<div
							class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
						>
							{data.fanDutyCycle.toFixed(2)} %
						</div>
					</div>
				</ListgroupItem>
				<ListgroupItem>
					<div class="flex items-center space-x-4">
						<div class="flex-1 min-w-0">
							<p class="text-xl">Fenster</p>
						</div>
						<div
							class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
						>
							<div class="flex flew-row items-center">
								<div class="flex">
									<Indicator
										class="absolute inline animate-ping"
										color={data.windowOpen ? 'green' : 'red'}
									/>
									<Indicator class="relative inline" color={data.windowOpen ? 'green' : 'red'} />
								</div>
								<span class="text-lg pl-1">{data.windowOpen ? 'Offen' : 'Geschlossen'}</span>
							</div>
						</div>
					</div>
				</ListgroupItem>
				<ListgroupItem>
					<div class="flex items-center space-x-4">
						<div class="flex-1 min-w-0">
							<p class="text-xl">Nachtschaltung</p>
						</div>
						<div
							class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
						>
							{data.nightModeConfig.startHour.toString().padStart(2, '0')}:00 - {data.nightModeConfig.endHour
								.toString()
								.padStart(2, '0')}:00 Uhr
						</div>
					</div>
				</ListgroupItem>
			</Listgroup>
		</Card>
	{:catch}
		<Card class="text-red-600 dark:text-red-500 grow" size="md">
			<h5 class="mb-2 text-2xl font-bold tracking-tight pl-4">Ein fehler ist aufgetreten...</h5>
		</Card>
	{/await}
</section>
