<script lang="ts">
    import { fly } from 'svelte/transition';
    import { CheckCircle, XCircle } from 'svelte-heros-v2';
    import { Toast } from 'flowbite-svelte';

    let toast: 'success' | 'error' | '' = '';
	let toastMessage: String = '';

	export const showToast: (display: 'success' | 'error' | '', message: String) => void = (display, message) => {
        toast = display;
        toastMessage = message;
        setTimeout(() => {
            toast = '';
        }, 3000);
    };
</script>

<div class="flex z-[51]">
    <Toast
        class="absolute mx-auto right-5 md:right-10 top-20 bg-primary-100 dark:bg-primary-700 text-slate-800 dark:text-slate-200 border-primary-300 dark:border-primary-900"
        transition={fly}
        open={toast === 'success'}
        params={{ x: 200 }}
        simple
    >
        <CheckCircle slot="icon" color="white" />
        {toastMessage}
    </Toast>
    <Toast
        class="absolute mx-auto right-5 md:right-10 top-20 bg-red-100 dark:bg-red-700 text-slate-800 dark:text-slate-200 border-red-300 dark:border-red-900"
        transition={fly}
        open={toast === 'error'}
        params={{ x: 200 }}
        simple
    >
        <XCircle slot="icon" color="white" />
        {toastMessage}
    </Toast>
</div>