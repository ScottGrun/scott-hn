<script lang="ts">
	import type { Post } from '../../../types';
	import DoubleUpIcon from '$lib/assets/icons/arrow-up-double.svg?component';
	import PenNibIcon from '$lib/assets/icons/pen-nib.svg?component';
	import TimeIcon from '$lib/assets/icons/time.svg?component';
	import CommentIcon from '$lib/assets/icons/comment.svg?component';
	import BriefCaseIcon from '$lib/assets/icons/briefcase.svg?component';
	import ChartIcon from '$lib/assets/icons/bar-chart.svg?component';
	import ArticleIcon from '$lib/assets/icons/article.svg?component';
	import ExternalLinkIcon from '$lib/assets/icons/external-link.svg?component';

	import PostAttribute from './PostAttribute.svelte';

	const { post }: { post: Post } = $props();

	const getCommentCountText = (count: number) => {
		if (count === 1) {
			return '1 comment';
		}
		return `${count} comments`;
	};

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

	console.log(post);
</script>

<article
	class="relative flex w-full items-center rounded py-6 transition-colors hover:bg-orange-50"
>
	<div
		aria-hidden="true"
		class="mr-4 flex h-10 w-10 items-center justify-center rounded-full bg-stone-50"
	>
		<svelte:component this={getIconFromPostType(post.type)} />
	</div>
	<div>
		<a
			href={`/${post.id}`}
			class="text-sm font-medium after:absolute after:inset-0 md:mr-1 md:inline"
		>
			{post.title}
		</a>
		{#if post.domain}
			<a href={post.url} class="mt-1 block text-xs font-normal text-neutral-600 md:inline">
				({post.domain})
			</a>
		{/if}
		<div class="mt-2 flex flex-wrap gap-x-3 gap-y-4">
			{#if post.points !== null}
				<PostAttribute>
					<DoubleUpIcon class="text-neutral-900" />
					{post.points} points
				</PostAttribute>
			{/if}
			{#if post.user !== null}
				<PostAttribute>
					<PenNibIcon class="text-neutral-900" />
					by
					<a href={`/user/${post.user}`} class="font-medium text-orange-500">{post.user}</a>
				</PostAttribute>
			{/if}
			{#if post.time_ago !== null}
				<PostAttribute>
					<TimeIcon class="text-neutral-900" />
					{post.time_ago}
				</PostAttribute>
			{/if}
			{#if post.comments_count !== null && post.type !== 'job'}
				<PostAttribute>
					<CommentIcon class="text-neutral-900" />
					{getCommentCountText(post.comments_count)}
				</PostAttribute>
			{/if}
		</div>
	</div>
</article>
