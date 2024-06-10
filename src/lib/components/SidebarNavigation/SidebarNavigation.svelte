<script lang="ts">
	import HomeIcon from '$lib/assets/icons/home.svg?component';
	import SpeakIcon from '$lib/assets/icons/speak.svg?component';
	import EyeIcon from '$lib/assets/icons/eye.svg?component';
	import BriefcaseIcon from '$lib/assets/icons/briefcase.svg?component';
	import SidebarLink from './SidebarLink.svelte';
</script>

<ul id="sidebar-content" class="pt-4">
	<SidebarLink href="/newest">
		<HomeIcon class="mr-3" /> New
	</SidebarLink>
	<SidebarLink href="/ask">
		<SpeakIcon class="mr-3" /> Ask
	</SidebarLink>
	<SidebarLink href="/show">
		<EyeIcon class="mr-3" />Show
	</SidebarLink>
	<SidebarLink href="/jobs">
		<BriefcaseIcon class="mr-3" /> Jobs
	</SidebarLink>
</ul>
