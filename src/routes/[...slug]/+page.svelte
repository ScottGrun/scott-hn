<script lang="ts">
	import { page } from '$app/stores';
	import PageEmptyState from '$lib/components/PageEmptyState.svelte';
	import Post from '$lib/components/Post/Post.svelte';
	const { data } = $props();

	const getPageTitleFromSlug = (slug: string) => {
		switch (slug) {
			case 'best':
				return 'Best';
			case 'news':
				return 'News';
			case 'newest':
				return 'New';
			case 'ask':
				return 'Ask';
			case 'show':
				return 'Show';
			case 'jobs':
				return 'Jobs';
			default:
				return 'News';
		}
	};
</script>

{#if data && data.content}
	<div class="pb-4 pt-8">
		<h1 class="text-xl font-semibold capitalize md:text-2xl">
			{getPageTitleFromSlug($page.params.slug)}
		</h1>
		<p class="mt-2 text-xs text-neutral-500 md:text-sm">
			Discover the latest submissions in the Hacker News community.
		</p>
		{#if data.content.length === 0}
			<p class="mt-8 text-sm text-neutral-500">No posts found.</p>
		{/if}
	</div>
	<ul>
		{#each data.content as post (post.id)}
			<Post {post} />
		{/each}
	</ul>
{:else}
	<PageEmptyState />
{/if}
