<script lang="ts">
    import { Indicator } from "flowbite-svelte";

    export let level: number;

    let batteryStatus: string;

    if (level >= 70) {
        batteryStatus = "bg-green-500";
    } else if (level >= 20) {
        batteryStatus = "dark:bg-yellow-300 !bg-amber-400";
    } else {
        batteryStatus = "bg-red-500";
    }
</script>

<div class="flex flew-row items-center">
    <div class="flex">
        <Indicator class="absolute inline animate-ping {batteryStatus}" />
        <Indicator class="relative inline {batteryStatus}" />
    </div>
    <span
        class="text-xl inline-flex items-center text-base font-semibold text-primary-600 dark:text-slate-200 pl-1"
        >{level.toFixed(2)}%</span
    >
</div>