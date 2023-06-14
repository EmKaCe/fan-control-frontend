<script lang="ts">
	import { Button, Modal } from 'flowbite-svelte';
	export let open: boolean;
</script>

<Modal
	title="Einstellungen"
	autoclose
	outsideclose
    bind:open={open}
	on:close={() => {
		open = false;
	}}
>
	<svelte:fragment slot="footer">
		<Button>Speichern</Button>
		<Button color="alternative">Abbrechen</Button>
	</svelte:fragment>
</Modal>
