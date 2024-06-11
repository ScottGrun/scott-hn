<script lang="ts">
	import ArrowLeftIcon from '$lib/assets/icons/arrow-left.svg?component';
	import PostAttributes from '$lib/components/Post/PostAttributes.svelte';
	import sanitizeHtml from 'sanitize-html';

	const { data } = $props();
	const sanitizedPostContent = sanitizeHtml(data.post.content);
</script>

<div class="max-w-[1072px] px-4 md:px-8">
	<button
		onclick={() => history.back()}
		class="my-6 flex items-center gap-1 text-sm font-medium text-orange-500"
	>
		<ArrowLeftIcon />
		Back
	</button>
	<div class="mx-auto max-w-[890px]">
		<h1 class="text-3xl font-semibold">{data.post.title}</h1>
		<PostAttributes
			class="mt-6"
			commentsCount={data.post?.comments_count}
			pointsCount={data.post?.points}
			timeAgo={data.post?.time_ago}
			user={data.post?.user}
			postType={data.post?.type}
		/>
		<div
			class="border-b border-b-neutral-200 pb-12 pt-9 text-base text-neutral-600 md:py-12 md:text-lg lg:pb-10 lg:pt-12"
		>
			{@html sanitizedPostContent}
		</div>
	</div>
</div>
