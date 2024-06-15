<script lang="ts">
	import DoubleUpIcon from '$lib/assets/icons/arrow-up-double.svg?component';
	import PenNibIcon from '$lib/assets/icons/pen-nib.svg?component';
	import TimeIcon from '$lib/assets/icons/time.svg?component';
	import CommentIcon from '$lib/assets/icons/comment.svg?component';

	import { twMerge } from 'tailwind-merge';

	interface PostAttributes {
		pointsCount: number | null;
		user: string | null;
		timeAgo: string | null;
		commentsCount: number | null;
		postType: string;
		class?: string;
	}

	const getCommentCountText = (count: number) => {
		if (count === 1) {
			return 'comment';
		}
		return 'comments';
	};

	const {
		pointsCount,
		user,
		timeAgo,
		commentsCount,
		postType,
		class: className
	}: PostAttributes = $props();
</script>

<dl class={twMerge('mt-2 flex flex-wrap gap-x-3 gap-y-4 text-xs  text-neutral-600', className)}>
	{#if typeof pointsCount === 'number'}
		<div class="flex items-center gap-1">
			<DoubleUpIcon class="text-neutral-900" aria-hidden="true" />
			<dd>{pointsCount}</dd>
			<dt>points</dt>
		</div>
	{/if}
	{#if user}
		<div class="flex items-center gap-1">
			<PenNibIcon class="text-neutral-900" aria-hidden="true" />
			<dt>by</dt>
			<dd><a href={`/user/${user}`} class="font-medium text-orange-500">{user}</a></dd>
		</div>
	{/if}
	{#if timeAgo}
		<div class="flex items-center gap-1">
			<TimeIcon class="text-neutral-900" />
			<dt class="sr-only">Date posted</dt>
			<dd>{timeAgo}</dd>
		</div>
	{/if}
	{#if typeof commentsCount === 'number' && postType !== 'job'}
		<div class="flex items-center gap-1">
			<CommentIcon class="text-neutral-900" />
			<dd>{commentsCount}</dd>
			<dt>
				{getCommentCountText(commentsCount)}
			</dt>
		</div>
	{/if}
</dl>
