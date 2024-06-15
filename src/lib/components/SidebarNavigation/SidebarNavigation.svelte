<script lang="ts">
	import SpeakIcon from '$lib/assets/icons/speak.svg?component';
	import EyeIcon from '$lib/assets/icons/eye.svg?component';
	import BriefcaseIcon from '$lib/assets/icons/briefcase.svg?component';
	import SidebarLink from './SidebarLink.svelte';
	import BestIcon from '$lib/assets/icons/best.svg?component';
	import NewIcon from '$lib/assets/icons/new.svg?component';
	import NewsIcon from '$lib/assets/icons/news.svg?component';
</script>

<ul id="sidebar-content" class="pt-4">
	<SidebarLink href="/news">
		<NewsIcon class="mr-3 w-5" /> News
	</SidebarLink>
	<SidebarLink href="/best">
		<BestIcon class="mr-3 w-5" /> Best
	</SidebarLink>
	<SidebarLink href="/show">
		<EyeIcon class="mr-3" />Show
	</SidebarLink>
	<SidebarLink href="/newest">
		<NewIcon class="mr-3" /> New
	</SidebarLink>
	<SidebarLink href="/ask">
		<SpeakIcon class="mr-3" /> Ask
	</SidebarLink>
	<SidebarLink href="/jobs">
		<BriefcaseIcon class="mr-3" /> Jobs
	</SidebarLink>
</ul>
