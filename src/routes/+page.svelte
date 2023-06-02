<script>
	import { Alert } from 'flowbite-svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section>
	<div class="p-8">
		<Alert>
			<span class="font-medium">Info alert!</span> Hello World!
		</Alert>
	</div>
</section>
