<script lang="ts">

	import { Button, Label, Tooltip } from "flowbite-svelte";
	import { QuestionMarkCircle } from "svelte-heros-v2";

    export let forId: string;
    export let title: string;
    export let tooltip: string;
</script>

<Label for={forId} class="flex flex-row justify-between mb-2">
    {title}
    <Button btnClass="p-0" outline={true} pill={true}>
        <QuestionMarkCircle class="text-primary-600 h-6 w-6" />
    </Button>
    <Tooltip class="w-72">
        {tooltip}
    </Tooltip>
</Label>