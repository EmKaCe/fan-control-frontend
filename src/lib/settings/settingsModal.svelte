<script lang="ts">
	import {
		Button,
		ButtonGroup,
		Input,
		InputAddon,
		Label,
		Modal,
		Toggle,
		Tooltip
	} from 'flowbite-svelte';
	import { QuestionMarkCircle } from 'svelte-heros-v2';
	import TooltipLabel from './tooltipLabel.svelte';
	export let open: boolean;
	let nightMode = true;
</script>

<Modal
	title="Einstellungen"
	autoclose
	outsideclose
	bind:open
	on:close={() => {
		open = false;
	}}
>
	<div class="flex flex-col justify-center">
		<form>
			<div class="mb-6">
                <TooltipLabel forId="api-host" title="API Adresse" tooltip="Gebe hier die Adresse des Backend Servers ein, von dem die Daten empfangen werden" />
				<Input id="api-host" placeholder="api.example.com" value="" />
			</div>
			<div class="mb-6 flex flex-row gap-6 justify-evenly">
				<div class="w-full">
                    <TooltipLabel forId="zip-code" title="Postleitzahl" tooltip="Wird verwendet um Wetterdaten zu erhalten" />
					<Input id="zip-code" placeholder="53757" type="number" />
				</div>
				<div class="w-full">
					<TooltipLabel
						forId="polling-rate"
						title="Polling rate (ms)"
						tooltip="Gibt an wie häufig das Dashboard aktualisiert wird (geringere Abstände erzeugen eine höhere Belastung des Servers)"
					/>
					<Input id="polling-rate" placeholder="1000" type="number" />
				</div>
			</div>
			<div class={nightMode ? 'mb-6 flex flex-row gap-6' : 'mb-6'}>
				<Toggle class="h-full place-self-end mb-3" bind:checked={nightMode}>Nachtschaltung</Toggle>
				{#if nightMode}
					<div class="w-full">
						<Label for="night-mode-start" class="block mb-2">Start</Label>
						<Input id="night-mode-start" value="22:00" type="time" />
					</div>
					<div class="w-full">
						<Label for="night-mode-end" class="block mb-2">Ende</Label>
						<Input id="night-mode-end" value="06:00" type="time" />
					</div>
					<div class="w-full">
						<Label for="night-mode-speed" class="block mb-2">Lüftergeschwindigkeit</Label>
						<ButtonGroup>
							<Input id="night-mode-speed" placeholder="100" type="number" />
							<InputAddon>%</InputAddon>
						</ButtonGroup>
					</div>
				{/if}
			</div>
			<div class="mb-6">
				<Toggle id="ignore-open-window">Offenes Fenster ignorieren?</Toggle>
			</div>
		</form>
	</div>
	<svelte:fragment slot="footer">
		<Button>Speichern</Button>
		<Button color="alternative">Abbrechen</Button>
	</svelte:fragment>
</Modal>
