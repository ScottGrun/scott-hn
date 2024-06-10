<script>
	import Logo from './Logo.svelte';
	import Sidebar from './Sidebar.svelte';
	import SidebarNavigation from './SidebarNavigation/SidebarNavigation.svelte';
</script>

<header class="flex items-center border-b border-neutral-200 px-3 py-4 md:px-8 lg:hidden">
	<a href="/" class="mr-auto">
		<Logo />
	</a>

	<Sidebar>
		<SidebarNavigation />
	</Sidebar>
</header>
