<script lang="ts">
	import { Card } from "flowbite-svelte";

    export let error: Error;
</script>

<Card class="text-red-600 dark:text-red-500 grow" size="md">
    <h5 class="mb-2 text-3xl font-bold tracking-tight pl-4">
        Fehler beim Laden der Daten
    </h5>
    <p class="text-xl px-4 text-red-600 dark:text-red-500">
        {error.message}
    </p>
</Card>