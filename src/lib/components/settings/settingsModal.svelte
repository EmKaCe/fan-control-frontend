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
		Spinner,
		Toggle
	} from 'flowbite-svelte';
	import TooltipLabel from './tooltipLabel.svelte';
	import type { SettingsData } from '$lib/stores/model/SettingsData';
	import settings from '$lib/stores/settings';
	import { ApiClient } from '$lib/api/client';
	import { AxiosError } from 'axios';
	import Error from '../cards/error.svelte';
	export let open: boolean;
	export let toast: (display: 'success' | 'error' | '', message: String) => void;

	export let currentSettings: SettingsData = JSON.parse($settings);

	let submitting = false;
	let advancedSettings = false;

	const resetSettings = () => {
		currentSettings = JSON.parse($settings);
		open = false;
	};

	const submitSettings = async () => {
		submitting = true;
		try {
			if (!currentSettings.url) {
				throw new AxiosError('Bitte gebe eine API Adresse an');
			}
			ApiClient.setUrl(currentSettings.url);
			const res = await ApiClient.getClient().setConfig(currentSettings);
			currentSettings = {
				url: currentSettings.url,
				config: res
			};
			settings.set(JSON.stringify(currentSettings));
			toast('success', 'Einstellungen gespeichert');
			open = false;
		} catch (e) {
			if (e instanceof AxiosError || e instanceof Error) {
				toast('error', `Fehler beim Speichern der Einstellungen: ${e.message}`);
			} else {
				toast('error', `Fehler beim Speichern der Einstellungen: ${e}`);
				console.error(e);
			}
		} finally {
			submitting = false;
		}
	};
</script>

<div>
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
					required
				/>
				<Input
					id="api-host"
					placeholder="api.example.com"
					required
					bind:value={currentSettings.url}
				/>
			</div>
			<div class="mb-6 flex flex-row gap-6 justify-evenly">
				<div class="w-full">
					<TooltipLabel
						forId="zip-code"
						title="Postleitzahl"
						tooltip="Wird verwendet um Wetterdaten zu erhalten"
						required
					/>
					<Input
						id="zip-code"
						placeholder="53757"
						required
						type="number"
						bind:value={currentSettings.config.zipCode}
					/>
				</div>
				<div class="w-full">
					<TooltipLabel
						forId="polling-rate-web"
						title="Polling rate Web (ms)"
						tooltip="Gibt an wie häufig das Dashboard aktualisiert wird (geringere Abstände erzeugen eine höhere Belastung des Servers)"
						required
					/>
					<Input
						id="polling-rate"
						placeholder="5000"
						required
						type="number"
						bind:value={currentSettings.config.pollingRateWeb}
					/>
				</div>
			</div>
			<div class="mb-6 flex flex-row gap-6 justify-evenly">
				<Toggle
					id="ignore-open-window"
					class="h-full place-self-end w-full pb-2"
					bind:checked={currentSettings.config.ignoreWindow}
					required
				>
					Offenes Fenster ignorieren?
				</Toggle>
				<div class="w-full">
					<TooltipLabel
						forId="hysteresis-offset"
						title="Hysteresefehler"
						tooltip="Gibt an wie stark die Luftfeuchtigkeit abweichen darf, bevor die Zweipunktregelung reagiert"
						required
					/>
					<ButtonGroup class="w-full">
						<Input
							id="hysteresis-offset"
							placeholder="0,5 - 5"
							type="number"
							required
							min="0.5"
							max="5"
							step="0.1"
							bind:value={currentSettings.config.hysteresisOffset}
						/>
						<InputAddon>g/m³</InputAddon>
					</ButtonGroup>
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
						<div class="mb-6">
							<div class="w-full mb-6">
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
					</div>
				</AccordionItem>
			</Accordion>
		</div>
		<svelte:fragment slot="footer">
			<Button on:click={submitSettings}>
				{#if submitting}
					<Spinner class="mr-3" size="5" color="white" />Lade...
				{:else}
					Speichern
				{/if}
			</Button>
			<Button color="alternative" on:click={resetSettings}>Abbrechen</Button>
		</svelte:fragment>
	</Modal>
</div>
