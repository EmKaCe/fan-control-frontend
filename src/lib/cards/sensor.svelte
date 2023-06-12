<script lang="ts">
	import CustomListPlaceholder from '$lib/CustomListPlaceholder.svelte';
	import { Card, Listgroup } from 'flowbite-svelte';
	export let title: string;
    export let list : {name: string; value?: string;}[];
</script>

<section class="w-full flex justify-center">
	<Card class="text-primary-700 dark:text-slate-200 grow" size="md">
		<h5 class="mb-2 text-3xl font-bold tracking-tight text-center">{title}</h5>
		{#if list}
			<Listgroup
				items={list}
				let:item
				class="border-0 dark:!bg-transparent my-4 dark:text-slate-300"
			>
				<div class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">{item.name}</p>
					</div>
					<div class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200">
						{#if item.value}
							{item.value}
						{:else}
							-
						{/if}
					</div>
				</div>
			</Listgroup>
		{:else}
			<CustomListPlaceholder class="border-none shadow-none space-y-2" rows={3} />
		{/if}
	</Card>
</section>
