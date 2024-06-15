<script>
	import '@fontsource-variable/noto-sans';
	import '@fontsource/ibm-plex-mono/500.css';
	import '../global.css';
	import Header from '$lib/components/Header.svelte';
	import SidebarNavigation from '$lib/components/SidebarNavigation/SidebarNavigation.svelte';
	import Logo from '$lib/components/Logo.svelte';
</script>

<Header />
<div class="mx-auto flex max-w-[1400px]">
	<aside
		class="sticky top-0 hidden min-h-screen w-[240px] self-start border-r border-neutral-200 p-4 lg:block"
	>
		<a href="/">
			<Logo class="pb-4" />
			<span class="sr-only">Home</span>
		</a>
		<SidebarNavigation />
	</aside>
	<main class="h-full w-full">
		<div class="h-full w-full px-4 md:px-8 lg:px-16">
			<slot />
		</div>
	</main>
</div>
