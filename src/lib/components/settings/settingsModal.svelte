<script lang="ts">
	import {
		Accordion,
		AccordionItem,
		Button,
		ButtonGroup,
		Input,
		InputAddon,
		Label,
		Modal,
		Toggle
	} from 'flowbite-svelte';
	import TooltipLabel from './tooltipLabel.svelte';
	import type { SettingsData } from '$lib/stores/model/SettingsData';
	import settings from '$lib/stores/settings';
	import { ApiClient } from '$lib/api/client';
	export let open: boolean;

	let currentSettings: SettingsData = JSON.parse($settings);

	const resetSettings = () => {
		currentSettings = JSON.parse($settings);
	};

	const submitSettings = async () => {
		// Add toast for feedback
		ApiClient.setUrl(currentSettings.url);
		const res = await ApiClient.getClient().setConfig(currentSettings.config);
		settings.set(JSON.stringify(res));
	};

	let advancedSettings = false;
</script>

<Modal
	title="Einstellungen"
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
				<Input
					id="zip-code"
					placeholder="53757"
					type="number"
					bind:value={currentSettings.config.zipCode}
				/>
			</div>
			<div class="w-full">
				<TooltipLabel
					forId="polling-rate-web"
					title="Polling rate Web (ms)"
					tooltip="Gibt an wie häufig das Dashboard aktualisiert wird (geringere Abstände erzeugen eine höhere Belastung des Servers)"
				/>
				<Input
					id="polling-rate"
					placeholder="5000"
					type="number"
					bind:value={currentSettings.config.pollingRateWeb}
				/>
			</div>
		</div>
		<div class="mb-6">
			<div class="w-full">
				<Label for="night-mode-start" class="block mb-2">Start (Stunde)</Label>
				<Input
					id="night-mode-start"
					bind:value={currentSettings.config.nightModeConfig.startHour}
					type="number"
					placeholder="0 - 23"
					min="0"
					max="23"
				/>
			</div>
			<div class="w-full">
				<Label for="night-mode-end" class="block mb-2">Ende (Stunde)</Label>
				<Input
					id="night-mode-end"
					bind:value={currentSettings.config.nightModeConfig.endHour}
					type="number"
					placeholder="0 - 23"
					min="0"
					max="23"
				/>
			</div>
		</div>
		<Accordion flush>
			<AccordionItem bind:open={advancedSettings} borderBottomClass="">
				<span slot="header">Erweiterte Einstellungen</span>
				<div slot="arrowdown">
					<Toggle bind:checked={advancedSettings} />
				</div>
				<div slot="arrowup">
					<Toggle bind:checked={advancedSettings} />
				</div>
				<div class="pt-6 border-t border-gray-200 dark:border-gray-700">
					<div class="mb-6 flex flex-row gap-6 justify-evenly">
						<div class="w-full">
							<TooltipLabel
								forId="polling-rate-indoor"
								title="Polling rate Innensensor (ms)"
								tooltip="Gibt an wie häufig der Innensensor Updates sendet (geringere Abstände erzeugen eine höhere Belastung des Servers)"
							/>
							<Input
								id="polling-rate-indoor"
								placeholder="5000"
								type="number"
								bind:value={currentSettings.config.pollingRateSensorInside}
							/>
						</div>
						<div class="w-full">
							<TooltipLabel
								forId="polling-rate-outdoor"
								title="Polling rate Außensensor (ms)"
								tooltip="Gibt an wie häufig der Außensensor Updates sendet (geringere Abstände erhöhen den Stromverbrauch)"
							/>
							<Input
								id="polling-rate-outdoor"
								placeholder="5000"
								type="number"
								bind:value={currentSettings.config.pollingRateSensorOutside}
							/>
						</div>
					</div>
					<div class="mb-6 flex flex-row gap-6 justify-evenly">
						<Toggle
							id="ignore-open-window"
							class="h-full place-self-end w-full pb-2"
							bind:checked={currentSettings.config.ignoreWindow}>Offenes Fenster ignorieren?</Toggle
						>
						<div class="w-full">
							<TooltipLabel
								forId="hysteresis-offset"
								title="Hysteresefehler"
								tooltip="Gibt an wie stark die Luftfeuchtigkeit abweichen darf, bevor die Zweipunktregelung reagiert"
							/>
							<ButtonGroup class="w-full">
								<Input
									id="hysteresis-offset"
									placeholder="0,5 - 5"
									type="number"
									min="0.5"
									max="5"
									step="0.1"
									bind:value={currentSettings.config.hysteresisOffset}
								/>
								<InputAddon>g/m³</InputAddon>
							</ButtonGroup>
						</div>
					</div>
				</div>
			</AccordionItem>
		</Accordion>
	</div>
	<svelte:fragment slot="footer">
		<Button on:click={submitSettings}>Speichern</Button>
		<Button color="alternative" on:click={resetSettings}>Abbrechen</Button>
	</svelte:fragment>
</Modal>
