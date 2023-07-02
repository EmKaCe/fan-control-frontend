<script lang="ts">
	import { Button, Label, Tooltip } from 'flowbite-svelte';
	import { QuestionMarkCircle } from 'svelte-heros-v2';

	export let forId: string;
	export let title: string;
	export let tooltip: string;
	export let required: boolean = false;
</script>

<Label for={forId} class="flex flex-row justify-between mb-2">
	<div>
		{title}
		{#if required}
			<span class="text-red-600 dark:text-red-200">*</span>
		{/if}
	</div>
	<Button btnClass="p-0" outline={true} pill={true}>
		<QuestionMarkCircle class="text-primary-600 h-6 w-6" />
	</Button>
	<Tooltip class="w-72">
		{tooltip}
	</Tooltip>
</Label>
