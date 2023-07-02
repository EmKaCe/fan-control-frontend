<svelte:options accessors />
<script lang="ts">
    export let date: string | number;
</script>

<div class="text-right text-slate-600 dark:text-slate-200">
	{#if date}
		Daten vom:
		{new Date(date).toLocaleString('de-DE', {
			day: '2-digit',
			month: '2-digit',
			year: 'numeric',
			hour: '2-digit',
			minute: '2-digit',
			second: '2-digit'
		})} Uhr
	{/if}
</div>
