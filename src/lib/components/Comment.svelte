<script lang="ts">
	import DOMPurify from 'isomorphic-dompurify';
	import type { PostComment } from '../../types';
	import { twMerge } from 'tailwind-merge';

	interface CommentProps {
		comment: PostComment;
		isSubComment?: boolean;
		isLastChild: boolean;
		postOwner: string;
	}

	const { comment, isSubComment, isLastChild, postOwner }: CommentProps = $props();
	const { comments, content } = comment;
	const santizedContent = comment?.content ? DOMPurify.sanitize(content) : null;
</script>

<li
	class={twMerge(
		'pt-4',
		!isSubComment && 'border-b border-neutral-300 pb-4',
		isLastChild && 'z-10'
	)}
>
	<article
		class={twMerge(
			'relative border-l border-transparent',
			isSubComment && !isLastChild && 'border-neutral-300 antialiased',
			isSubComment && 'ml-2 pl-4'
		)}
	>
		{#if isSubComment}
			<div
				class="absolute left-[-1px] top-[-32px] z-10 h-[43px] w-[12px] rounded-bl border-b border-l border-neutral-300 antialiased"
			></div>
		{/if}

		<div class="relative flex w-full gap-2 text-sm font-normal text-neutral-600">
			<a href={`/users/${comment.user}`} class="block font-semibold text-neutral-900">
				{comment.user}
				{#if postOwner === comment.user}
					<span class="text-blue-500">OP</span>
				{/if}
			</a>

			•
			<time>{comment.time_ago}</time>
		</div>
		<div
			class="prose-sm max-w-none pt-2 text-sm leading-normal text-neutral-900 prose-a:break-all prose-a:text-orange-500 prose-pre:whitespace-pre-wrap"
		>
			{@html santizedContent}
		</div>
		{#if comments && comments.length > 0}
			<ul class={twMerge(isSubComment && 'pt-8', 'relative  pt-4')}>
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
