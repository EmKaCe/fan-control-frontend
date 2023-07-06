<script lang="ts">
	import { ApiClient } from '$lib/api/client';
	import type { IndoorResponse } from '$lib/api/model/IndoorResponse';
	import type { OutdoorResponse } from '$lib/api/model/OutdoorResponse';
	import IndoorStatsDebug from '$lib/debug/IndoorStatsDebug';
	import OutdoorStatsDebug from '$lib/debug/OutdoorStatsDebug';
	import * as Plot from '@observablehq/plot';
	import { Alert, Card, Indicator, Spinner } from 'flowbite-svelte';
	import { ExclamationCircle } from 'svelte-heros-v2';

	const debug = false;

	let hidden = true;

	const getData = async (limit: number) => {
		let indoorData: IndoorResponse[];
		let outdoorData: OutdoorResponse[];
		if (debug) {
			await new Promise((resolve) => setTimeout(resolve, 10000));
			indoorData = IndoorStatsDebug;
			outdoorData = OutdoorStatsDebug;
		} else {
			indoorData = await ApiClient.getClient().getHistoricIndoor(limit);
			outdoorData = await ApiClient.getClient().getHistoricOutdoor(limit);
		}
		const plotClasses = ['!bg-transparent', 'dark:text-slate-200', 'text-lg'];

		const temperaturePlot = Plot.plot({
			marks: [
				Plot.line(indoorData, {
					x: 'date',
					y: 'temperature',
					stroke: '#0ea5e9'
				}),
				Plot.line(outdoorData, {
					x: 'date',
					y: 'temperature',
					stroke: '#dc2626'
				})
			],
			x: {
				grid: true,
				label: 'Zeitpunkt (hh:mm)',
				labelOffset: -10,
				transform: (date: string) => new Date(date),
				tickFormat(t: Date, i) {
					if (i % 5 === 0) {
						// Only show label for every fifth tick
						return t.toLocaleTimeString('de-DE', {
							hour: '2-digit',
							minute: '2-digit'
						});
					}
					return ''; // Empty string for other ticks
				},
				line: true
			},
			y: {
				grid: true,
				label: 'Temperatur (°C)',
				labelOffset: 0,
				domain: [-10, 40],
				line: true
			},
			width: window.visualViewport ? window.visualViewport?.width * 0.9 : 600
		});
		temperaturePlot.classList.add(...plotClasses);
		document.getElementById('temperaturePlot')?.appendChild(temperaturePlot);

		const relHumidityPlot = Plot.plot({
			marks: [
				Plot.line(indoorData, {
					x: 'date',
					y: 'relativeHumidity',
					stroke: '#0ea5e9'
				}),
				Plot.line(outdoorData, {
					x: 'date',
					y: 'relativeHumidity',
					stroke: '#dc2626'
				})
			],
			x: {
				grid: true,
				label: 'Zeitpunkt (hh:mm)',
				labelOffset: -10,
				transform: (date: string) => new Date(date),
				tickFormat(t: Date, i) {
					if (i % 5 === 0) {
						// Only show label for every fifth tick
						return t.toLocaleTimeString('de-DE', {
							hour: '2-digit',
							minute: '2-digit'
						});
					}
					return ''; // Empty string for other ticks
				},
				line: true
			},
			y: {
				grid: true,
				label: 'relative Luftfeuchte (%)',
				labelOffset: 0,
				domain: [0, 100],
				line: true
			},
			width: window.visualViewport ? window.visualViewport?.width * 0.9 : 600
		});
		relHumidityPlot.classList.add(...plotClasses);
		document.getElementById('relHumidityPlot')?.appendChild(relHumidityPlot);

		const absHumidityPlot = Plot.plot({
			marks: [
				Plot.line(indoorData, {
					x: 'date',
					y: 'absoluteHumidity',
					stroke: '#0ea5e9'
				}),
				Plot.line(outdoorData, {
					x: 'date',
					y: 'absoluteHumidity',
					stroke: '#dc2626'
				})
			],
			x: {
				grid: true,
				label: 'Zeitpunkt (hh:mm)',
				labelOffset: -10,
				transform: (date: string) => new Date(date),
				tickFormat(t: Date, i) {
					if (i % 5 === 0) {
						// Only show label for every fifth tick
						return t.toLocaleTimeString('de-DE', {
							hour: '2-digit',
							minute: '2-digit'
						});
					}
					return ''; // Empty string for other ticks
				},
				line: true
			},
			y: {
				grid: true,
				label: 'absolute Luftfeuchte (g/m³)',
				labelOffset: 0,
				domain: [0, 60],
				line: true
			},
			width: window.visualViewport ? window.visualViewport?.width * 0.9 : 600
		});
		absHumidityPlot.classList.add(...plotClasses);
		document.getElementById('absHumidityPlot')?.appendChild(absHumidityPlot);

		hidden = false;
	};
</script>

<svelte:head>
	<title>IoT - Statistiken</title>
	<meta name="description" content="Statistiken des IoT Dashboard" />
</svelte:head>

<div class="flex flex-col align-center justify-center gap-5">
	<div class="flex flex-col justify-center">
		{#await getData(100)}
			<div class="flex justify-center">
				<Spinner size="16" />
			</div>
		{:catch e}
			<Alert class="bg-red-600 text-red-100 dark:bg-red-200 dark:text-red-800">
				<ExclamationCircle class="h-5 w-5 mr-2" slot="icon" />
				<span class="font-medium">Es ist ein Fehler aufgetreten: {e.message}</span>
			</Alert>
		{/await}
		<div class:hidden>
			<Card class="mb-5 w-full !max-w-full text-slate-800 dark:text-slate-200" id="temperaturePlot">
				<div class="flex flex-row justify-end gap-5">
					<span class="flex items-center">
						<Indicator size="md" class="mr-1.5 bg-red-600" />
						Außensensor
					</span>
					<span class="flex items-center">
						<Indicator size="md" class="mr-1.5 bg-sky-500" />
						Innensensor
					</span>
				</div>
			</Card>
			<Card class="mb-5 w-full !max-w-full text-slate-800 dark:text-slate-200" id="relHumidityPlot">
				<div class="flex flex-row justify-end gap-5">
					<span class="flex items-center">
						<Indicator size="md" class="mr-1.5 bg-red-600" />
						Außensensor
					</span>
					<span class="flex items-center">
						<Indicator size="md" class="mr-1.5 bg-sky-500" />
						Innensensor
					</span>
				</div>
			</Card>
			<Card class="mb-5 w-full !max-w-full text-slate-800 dark:text-slate-200" id="absHumidityPlot">
				<div class="flex flex-row justify-end gap-5">
					<span class="flex items-center">
						<Indicator size="md" class="mr-1.5 bg-red-600" />
						Außensensor
					</span>
					<span class="flex items-center">
						<Indicator size="md" class="mr-1.5 bg-sky-500" />
						Innensensor
					</span>
				</div>
			</Card>
		</div>
	</div>
</div>
