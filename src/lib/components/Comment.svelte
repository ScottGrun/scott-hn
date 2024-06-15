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
	const santizedContent = comment?.content ? sanitize(comment.content) : null;
</script>

{#if comment}
	<li
		class={twMerge(
			'pt-4',
			!isSubComment && 'border-b border-neutral-300 pb-4',
			isLastChild && 'z-10'
		)}
	>
		<article class="relative">
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
			<div>
				<div class="relative flex h-[10px] gap-2 text-sm font-normal text-neutral-600">
					<a href={`/users/${comment.user}`} class="font-semibold text-neutral-900"
						>{comment.user}</a
					>
					• <time>{comment.time_ago}</time>
				</div>

				{#if santizedContent}
					<p class="prose mt-3 text-sm">
						{@html santizedContent}
					</p>
				{/if}
			</div>

			{#if comment.comments && comment.comments.length > 0}
				<ul class={twMerge(isSubComment ? 'pt-8' : '', 'pt-4', '0 pl-4', 'relative')}>
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
{/if}

<style lang="postcss">
	:global(html) {
		ul article ul li:last-child .test {
			background-color: blue !important;
			width: 50px;
		}
	}
</style>
