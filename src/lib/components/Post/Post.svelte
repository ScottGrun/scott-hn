<script lang="ts">
	import type { Post } from '../../../types';
	import BriefCaseIcon from '$lib/assets/icons/briefcase.svg?component';
	import ChartIcon from '$lib/assets/icons/bar-chart.svg?component';
	import ArticleIcon from '$lib/assets/icons/article.svg?component';
	import ExternalLinkIcon from '$lib/assets/icons/external-link.svg?component';
	import PostAttributes from './PostAttributes.svelte';

	const { post }: { post: Post } = $props();

	const getIconFromPostType = (type: string) => {
		switch (type) {
			case 'ask':
				return ArticleIcon;
			case 'show':
				return ExternalLinkIcon;
			case 'job':
				return BriefCaseIcon;
			case 'poll':
				return ChartIcon;
			default:
				return ArticleIcon;
		}
	};
</script>

<article
	class="relative -ml-2 flex w-full items-center rounded px-2 py-6 transition-all will-change-transform hover:translate-x-2 hover:bg-orange-50"
>
	<div
		aria-hidden="true"
		class="mr-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-50"
	>
		<svelte:component this={getIconFromPostType(post.type)} />
	</div>
	<div>
		<a
			href={`/item?id=${post.id}`}
			class="text-sm font-medium after:absolute after:inset-0 md:mr-1 md:inline"
		>
			{post.title}
		</a>
		{#if post.domain}
			<a href={post.url} class="mt-1 block text-xs font-normal text-neutral-600 md:inline">
				({post.domain})
			</a>
		{/if}
		<PostAttributes
			commentsCount={post.comments_count}
			pointsCount={post.points}
			timeAgo={post.time_ago}
			user={post.user}
			postType={post.type}
		/>
	</div>
</article>
