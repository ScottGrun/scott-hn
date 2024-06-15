<script lang="ts">
	import { twMerge } from 'tailwind-merge';

	interface PollProps {
		poll: { item: string; points: number }[];
		class?: string;
	}

	const { poll, class: className }: PollProps = $props();
	const sortedPollItems = poll ? poll.sort((a, b) => b.points - a.points) : [];
</script>

<ul class={twMerge('w-full space-y-2', className)}>
	{#each poll as { item, points }}
		<li class="grid grid-cols-[1fr_max-content] text-sm font-normal">
			<div class="relative p-2">
				<div
					class="absolute left-0 top-0 z-[-1] h-full rounded bg-orange-200"
					style="width: {(points / sortedPollItems[0].points) * 100}%"
				></div>
				{item}
			</div>
			<span class="p-2 font-medium">{points} points</span>
		</li>
	{/each}
</ul>
