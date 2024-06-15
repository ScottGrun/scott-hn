<script lang="ts">
	import ArrowLeftIcon from '$lib/assets/icons/arrow-left.svg?component';
	import Comment from '$lib/components/Comment.svelte';
	import PostAttributes from '$lib/components/Post/PostAttributes.svelte';
	import sanitizeHtml from 'sanitize-html';

	const { data } = $props();
	const sanitizedPostContent = data.post?.content ? sanitizeHtml(data.post.content) : null;
</script>

{#if data.post}
	<div class="max-w-[1072px] px-4 md:px-8">
		<div class="mx-auto max-w-[890px]">
			<button
				onclick={() => history.back()}
				class="my-6 flex items-center gap-1 text-sm font-medium text-orange-500"
			>
				<ArrowLeftIcon />
				Back
			</button>
			<section class="border-b border-neutral-300 pb-12 lg:pb-10">
				<h1 class="text-3xl font-semibold">{data.post.title}</h1>
				<PostAttributes
					class="mt-6"
					commentsCount={data.post?.comments_count}
					pointsCount={data.post?.points}
					timeAgo={data.post?.time_ago}
					user={data.post?.user}
					postType={data.post?.type}
				/>

				{#if sanitizedPostContent}
					<div
						class="prose max-w-none pt-9 text-base leading-normal text-neutral-600 md:prose-lg md:text-lg"
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
	</div>
{/if}
