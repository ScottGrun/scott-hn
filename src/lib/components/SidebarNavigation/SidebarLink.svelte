<script lang="ts">
	import type { Snippet } from 'svelte';
	import type { HTMLAnchorAttributes } from 'svelte/elements';

	interface SidebarLinkProps extends HTMLAnchorAttributes {
		children: Snippet;
		icon?: Snippet;
	}

	const { icon, children, ...props }: SidebarLinkProps = $props();
</script>

<li>
	<a
		{...props}
		class="flex w-full items-center rounded p-[0.375rem] text-sm font-medium text-neutral-600 transition-colors hover:bg-orange-50 hover:text-orange-600 focus:bg-orange-50 focus:text-orange-600"
	>
		{@render children()}
	</a>
</li>
