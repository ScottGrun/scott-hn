<script lang="ts">
	import type { Snippet } from 'svelte';

	const { children }: { children: Snippet } = $props();
</script>

<div class="flex items-center gap-1 text-xs text-neutral-600">
	{@render children()}
</div>
