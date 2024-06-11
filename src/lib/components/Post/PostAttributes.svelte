<script lang="ts">
	import DoubleUpIcon from '$lib/assets/icons/arrow-up-double.svg?component';
	import PenNibIcon from '$lib/assets/icons/pen-nib.svg?component';
	import TimeIcon from '$lib/assets/icons/time.svg?component';
	import CommentIcon from '$lib/assets/icons/comment.svg?component';
	import PostAttributeWrapper from './PostAttributeWrapper.svelte';
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
			return '1 comment';
		}
		return `${count} comments`;
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

<div class={twMerge('mt-2 flex flex-wrap gap-x-3 gap-y-4', className)}>
	{#if typeof pointsCount === 'number'}
		<PostAttributeWrapper>
			<DoubleUpIcon class="text-neutral-900" />
			{pointsCount} points
		</PostAttributeWrapper>
	{/if}
	{#if user}
		<PostAttributeWrapper>
			<PenNibIcon class="text-neutral-900" />
			by
			<a href={`/user/${user}`} class="font-medium text-orange-500">{user}</a>
		</PostAttributeWrapper>
	{/if}
	{#if timeAgo}
		<PostAttributeWrapper>
			<TimeIcon class="text-neutral-900" />
			{timeAgo}
		</PostAttributeWrapper>
	{/if}
	{#if typeof commentsCount === 'number' && postType !== 'job'}
		<PostAttributeWrapper>
			<CommentIcon class="text-neutral-900" />
			{getCommentCountText(commentsCount)}
		</PostAttributeWrapper>
	{/if}
</div>
