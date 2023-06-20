<script lang="ts">
	import { Button, ButtonGroup, Input, InputAddon, Label, Modal, Toggle } from 'flowbite-svelte';
	import TooltipLabel from './tooltipLabel.svelte';
	import type { SettingsData } from '$lib/stores/model/SettingsData';
	import settings from '$lib/stores/settings';
	export let open: boolean;

	let currentSettings: SettingsData = JSON.parse($settings);

	const resetSettings = () => {
		currentSettings = JSON.parse($settings);
	};

	const submitSettings = () => {
		settings.set(JSON.stringify(currentSettings));
	};
</script>

<Modal
	title="Einstellungen"
	autoclose
	outsideclose
	bind:open
	on:close={() => {
		open = false;
		resetSettings();
	}}
	on:hide={resetSettings}
>
	<div class="flex flex-col justify-center">
		<div class="mb-6">
			<TooltipLabel
				forId="api-host"
				title="API Adresse"
				tooltip="Gebe hier die Adresse des Backend Servers ein, von dem die Daten empfangen werden"
			/>
			<Input id="api-host" placeholder="api.example.com" bind:value={currentSettings.url} />
		</div>
		<div class="mb-6 flex flex-row gap-6 justify-evenly">
			<div class="w-full">
				<TooltipLabel
					forId="zip-code"
					title="Postleitzahl"
					tooltip="Wird verwendet um Wetterdaten zu erhalten"
				/>
				<Input id="zip-code" placeholder="53757" type="number" bind:value={currentSettings.zip} />
			</div>
			<div class="w-full">
				<TooltipLabel
					forId="polling-rate"
					title="Polling rate (ms)"
					tooltip="Gibt an wie häufig das Dashboard aktualisiert wird (geringere Abstände erzeugen eine höhere Belastung des Servers)"
				/>
				<Input
					id="polling-rate"
					placeholder="1000"
					type="number"
					bind:value={currentSettings.pollingRate}
				/>
			</div>
		</div>
		<div class={currentSettings.nightMode ? 'mb-6 flex flex-row gap-6' : 'mb-6'}>
			<Toggle class="h-full place-self-end mb-3" bind:checked={currentSettings.nightMode}
				>Nachtschaltung</Toggle
			>
			{#if currentSettings.nightMode}
				<div class="w-full">
					<Label for="night-mode-start" class="block mb-2">Start</Label>
					<Input id="night-mode-start" bind:value={currentSettings.nightModeStart} type="time" />
				</div>
				<div class="w-full">
					<Label for="night-mode-end" class="block mb-2">Ende</Label>
					<Input id="night-mode-end" bind:value={currentSettings.nightModeEnd} type="time" />
				</div>
				<div class="w-full">
					<Label for="night-mode-speed" class="block mb-2">Lüftergeschwindigkeit</Label>
					<ButtonGroup>
						<Input
							id="night-mode-speed"
							placeholder="100"
							type="number"
							bind:value={currentSettings.nightModeSpeed}
						/>
						<InputAddon>%</InputAddon>
					</ButtonGroup>
				</div>
			{/if}
		</div>
		<div class="mb-6">
			<Toggle id="ignore-open-window" bind:checked={currentSettings.ignoreWindow}>Offenes Fenster ignorieren?</Toggle>
		</div>
	</div>
	<svelte:fragment slot="footer">
		<Button on:click={submitSettings}>Speichern</Button>
		<Button color="alternative" on:click={resetSettings}>Abbrechen</Button>
	</svelte:fragment>
</Modal>
