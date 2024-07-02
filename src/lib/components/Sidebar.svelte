<script lang="ts">
	import CloseIcon from '$lib/assets/icons/close.svg?component';
	import MenuIcon from '$lib/assets/icons/menu.svg?component';
	import { twMerge } from 'tailwind-merge';
	import { getKeyboardFocusableElements } from '$lib/utils/getKeyboardFocusableElements';
	import type { Snippet } from 'svelte';
	import Logo from './Logo.svelte';

	interface SidebarProps {
		children: Snippet;
	}

	const { children }: SidebarProps = $props();

	let isVisible = $state(false);
	let isActive = $state(false);
	let closeBtn: HTMLButtonElement;
	let menuBtn: HTMLButtonElement;
	let sideBarContent: HTMLDivElement;
	let firstFocusableElement: HTMLElement;
	let lastFocusableElement: HTMLElement;

	const trapFocus = (e: KeyboardEvent) => {
		if (e.key === 'Tab' && !e.shiftKey && document.activeElement === lastFocusableElement) {
			e.preventDefault();
			firstFocusableElement.focus();
		}

		if (e.key === 'Tab' && e.shiftKey && document.activeElement === firstFocusableElement) {
			e.preventDefault();
			lastFocusableElement.focus();
		}

		if (e.key === 'Escape') {
			closeSideBar();
		}
	};

	const openSideBar = () => {
		isVisible = true;
		isActive = true;

		setTimeout(() => {
			closeBtn.focus();
			const focusableElements = getKeyboardFocusableElements(sideBarContent);
			firstFocusableElement = focusableElements[0];
			lastFocusableElement = focusableElements[focusableElements.length - 1];
		}, 200);
	};

	const closeSideBar = () => {
		isVisible = false;
		isActive = false;
		setTimeout(() => {
			isVisible = false;
			menuBtn.focus();
		}, 1);
		setTimeout(() => {
			isVisible = false;
		}, 501);
	};
</script>

<svelte:window on:keydown={trapFocus} />

<!-- Overlay -->
<div
	role="none"
	onclick={closeSideBar}
	class={twMerge(
		'transition-all duration-500',
		isVisible ? 'visible fixed inset-0 z-10 bg-neutral-950 opacity-70' : 'invisible opacity-0'
	)}
></div>
<nav class="flex leading-none">
	<button aria-controls="sidebar-nav" onclick={openSideBar} bind:this={menuBtn}>
		<MenuIcon class="h-6 w-6" aria-hidden />
		<span class="sr-only">Menu</span>
	</button>

	<!-- Sidebar -->
	<div
		class={twMerge(
			'fixed left-0 top-0 z-20 h-full w-[240px] bg-white p-4 pt-10 leading-normal transition-[left_right] duration-500 will-change-transform',
			isActive ? 'left-0' : 'left-[-240px]',
			isVisible ? 'visible' : 'invisible'
		)}
		bind:this={sideBarContent}
	>
		<div class="flex items-center">
			<div class="mr-auto flex items-center">
				<Logo />
			</div>
			<button
				aria-controls="sidebar-content"
				class="p-[0.375rem]"
				onclick={closeSideBar}
				bind:this={closeBtn}
				id="close"
			>
				<CloseIcon />
				<span class="sr-only">Close</span>
			</button>
		</div>

		<div id="sidebar-content" class="pt-4">
			{@render children()}
		</div>
	</div>
</nav>
