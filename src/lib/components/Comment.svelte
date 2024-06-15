<script lang="ts">
	import sanitize from 'sanitize-html';
	import type { PostComment } from '../../types';
	import { twMerge } from 'tailwind-merge';

	interface CommentProps {
		comment: PostComment;
		isSubComment?: boolean;
		isLastChild: boolean;
	}

	const { comment, isSubComment, isLastChild }: CommentProps = $props();
	const { comments, content } = comment;
	const santizedContent = comment?.content ? sanitize(content) : null;
</script>

<li
	class={twMerge(
		'pt-4',
		!isSubComment && 'border-b border-neutral-300 pb-4',
		isLastChild && 'z-10'
	)}
>
	<article class={twMerge('relative')}>
		{#if isSubComment}
			<div
				class="absolute left-[-16.5px] top-[-32px] z-10 h-[42px] w-[14px] rounded-bl border-b border-l border-neutral-300 antialiased"
			></div>
		{/if}
		{#if isSubComment && !isLastChild}
			<div
				class="absolute inset-y-0 left-[-16.5px] z-10 h-full w-[14px] border-l border-neutral-300 antialiased"
			></div>
		{/if}

		<div class="relative flex w-full gap-2 text-sm font-normal text-neutral-600">
			<a href={`/users/${comment.user}`} class="block font-semibold text-neutral-900"
				>{comment.user}</a
			>
			• <time>{comment.time_ago}</time>
		</div>

		{#if santizedContent}
			<div class="prose mt-3 text-sm text-neutral-900">
				{@html santizedContent}
			</div>
		{/if}

		{#if comments && comments.length > 0}
			<ul class={twMerge(isSubComment && 'pt-8', 'relative pl-4 pt-4')}>
				{#each comment.comments as subComment, index (subComment.id)}
					<svelte:self
						comment={subComment}
						isSubComment={true}
						isLastChild={index === comment.comments.length - 1}
					/>
				{/each}
			</ul>
		{/if}
	</article>
</li>
