<script lang="ts">
	import CustomListPlaceholder from '$lib/components/CustomListPlaceholder.svelte';
	import BatteryIndicator from '$lib/components/batteryIndicator.svelte';
	import { Card, Listgroup } from 'flowbite-svelte';
	export let title: string;
	export let list: { name: string; value?: number, unit?: string, level?: number }[];
</script>

<section class="w-full h-full flex justify-center">
	<Card class="text-primary-700 dark:text-slate-200 grow" size="md">
		<h5 class="mb-2 text-3xl font-bold tracking-tight pl-4">{title}</h5>
		{#if list}
			<Listgroup
				items={list}
				let:item
				class="border-0 dark:!bg-transparent my-4 text-slate-700 dark:text-slate-300 h-full flex flex-col justify-center"
			>
				<div class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">{item.name}</p>
					</div>
					{#if item.level}
						<BatteryIndicator level={item.level} />
					{:else}
						<div
							class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
						>
							{#if item.value}
								{item.value.toFixed(2)} {item.unit}
							{:else}
								-
							{/if}
						</div>
					{/if}
				</div>
			</Listgroup>
		{:else}
			<CustomListPlaceholder class="border-none shadow-none space-y-2" rows={3} />
		{/if}
	</Card>
</section>
