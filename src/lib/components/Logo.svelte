<script lang="ts">
	import Logo from '$lib/assets/icons/logo.svg?component';
	import { twMerge } from 'tailwind-merge';
	const { class: className = '' } = $props();
</script>

<div class={twMerge('flex items-center', className)}>
	<Logo aria-hidden class="mr-2 h-8 w-8" />
	<span class="font-mono text-base font-medium leading-6 tracking-[-6%]">Scott_HN</span>
</div>
