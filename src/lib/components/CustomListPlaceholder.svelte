<script lang="ts">
	import classNames from 'classnames';
	export let divClass: string =
		'grow p-4 space-y-4 max-w-lg rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700';
	export let rows: number;
</script>

<div role="status" class={classNames(divClass, $$props.class)}>
	<h5 class="text-3xl font-bold tracking-tight pl-4 text-slate-800 dark:text-slate-200">Warte auf Daten...</h5>
	<div class="flex justify-between items-center pt-4">
		<div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
			<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
		</div>
		<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
	</div>
	{#each Array.from(Array(rows - 1).keys()) as e}
		<div class="flex justify-between items-center pt-4">
			<div>
				<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-600 w-24 mb-2.5" />
				<div class="w-32 h-2 bg-gray-200 rounded-full dark:bg-gray-700" />
			</div>
			<div class="h-2.5 bg-gray-300 rounded-full dark:bg-gray-700 w-12" />
		</div>
	{/each}
	<span class="sr-only">Loading...</span>
</div>

<!--
    @component
    ## Features
    [Go to Skeleton List Placeholder](https://flowbite-svelte.com/docs/components/skeleton#List_placeholder)
    ## Props
    @prop divClass: string = 'p-4 space-y-4 max-w-md rounded border border-gray-200 divide-y divide-gray-200 shadow animate-pulse dark:divide-gray-700 md:p-6 dark:border-gray-700';
    ## Example
    ```
    <script>
      import { ListPlaceholder } from 'flowbite-svelte'
    </script>
  
    <ListPlaceholder />
    ```
  -->
