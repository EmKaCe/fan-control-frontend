<script>
	import { Card, Indicator, Listgroup, ListgroupItem } from 'flowbite-svelte';

	let data = {
		active: true,
		speed: 50,
		window: false,
		nightTimeStart: '22:00',
		nightTimeEnd: '06:00'
	};
</script>

<section class="w-full h-full flex justify-center">
	<Card class="text-primary-700 dark:text-slate-200 grow" size="md">
		<div class="flex justify-between">
			<div class="flex flex-col pl-4">
				<div class="flex flex-row justify-between">
					<span class="text-3xl font-bold">Lüftung</span>
				</div>
				<div class="flex flew-row items-center">
					<div class="flex">
						<Indicator class="absolute inline animate-ping" color={data.active ? 'green' : 'red'} />
						<Indicator class="relative inline" color={data.active ? 'green' : 'red'} />
					</div>
					<span class="text-lg pl-1">Status: {data.active ? 'An' : 'Aus'}</span>
				</div>
			</div>
		</div>
		<Listgroup
			class="border-0 dark:!bg-transparent my-4 dark:text-slate-300 h-full flex flex-col justify-center"
		>
			<ListgroupItem>
				<div class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">Geschwindigkeit</p>
					</div>
					<div
						class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
					>
						{data.speed}%
					</div>
				</div>
			</ListgroupItem>
			<ListgroupItem>
				<div class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">Fenster</p>
					</div>
					<div
						class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
					>
						<div class="flex flew-row items-center">
							<div class="flex">
								<Indicator
									class="absolute inline animate-ping"
									color={data.window ? 'green' : 'red'}
								/>
								<Indicator class="relative inline" color={data.window ? 'green' : 'red'} />
							</div>
							<span class="text-lg pl-1">{data.window ? 'Offen' : 'Geschlossen'}</span>
						</div>
					</div>
				</div>
			</ListgroupItem>
			<ListgroupItem>
				<div class="flex items-center space-x-4">
					<div class="flex-1 min-w-0">
						<p class="text-xl">Nachtschaltung</p>
					</div>
					<div
						class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200"
					>
						{data.nightTimeStart} - {data.nightTimeEnd} Uhr
					</div>
				</div>
			</ListgroupItem>
		</Listgroup>
	</Card>
</section>
