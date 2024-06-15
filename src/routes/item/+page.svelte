<script lang="ts">
	import ArrowLeftIcon from '$lib/assets/icons/arrow-left.svg?component';
	import Comment from '$lib/components/Comment.svelte';
	import PageEmptyState from '$lib/components/PageEmptyState.svelte';
	import PostAttributes from '$lib/components/Post/PostAttributes.svelte';
	import sanitizeHtml from 'sanitize-html';

	const { data } = $props();
	const sanitizedPostContent = data.post?.content ? sanitizeHtml(data.post.content) : null;
</script>

{#if data && data.post}
	<div class="max-w-[890px]">
		<button
			onclick={() => history.back()}
			class="mt-6 flex items-center gap-1 text-sm font-medium text-orange-500 md:mt-10 lg:mt-8"
		>
			<ArrowLeftIcon />
			Back
		</button>
		<section class="6 mt-8 border-b border-neutral-300 pb-12 md:mt-14 lg:pb-10">
			<h1 class="text-3xl font-semibold md:text-4xl">{data.post.title}</h1>
			<PostAttributes
				class="mt-6 text-sm "
				commentsCount={data.post?.comments_count}
				pointsCount={data.post?.points}
				timeAgo={data.post?.time_ago}
				user={data.post?.user}
				postType={data.post?.type}
			/>

			{#if sanitizedPostContent}
				<div
					class="prose max-w-none break-words pt-9 text-base leading-normal text-neutral-600 md:prose-lg prose-a:text-orange-500 prose-pre:whitespace-pre-wrap md:text-lg"
				>
					{@html sanitizedPostContent}
				</div>
			{/if}
		</section>
		<section>
			<h2 class="py-4 text-lg font-medium">{data.post.comments_count} Comments</h2>
			<ul>
				{#each data.post.comments as comment, index (comment.id)}
					<Comment {comment} isLastChild={index === data.post.comments.length - 1} />
				{/each}
			</ul>
		</section>
	</div>
{:else}
	<PageEmptyState />
{/if}
