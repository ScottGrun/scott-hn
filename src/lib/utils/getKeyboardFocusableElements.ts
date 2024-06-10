export const getKeyboardFocusableElements = (element: HTMLElement | null) => {
	if (!element) return [];

	const focusableSelectors = [
		'a[href]',
		'button',
		'input',
		'textarea',
		'select',
		'details',
		'[tabindex]:not([tabindex="-1"])'
	];

	return Array.from<HTMLElement>(element.querySelectorAll(focusableSelectors.join(','))).filter(
		(el) => {
			const style = getComputedStyle(el);
			return (
				!el.hasAttribute('disabled') &&
				el.getAttribute('aria-hidden') !== 'true' &&
				style.display !== 'none' &&
				style.visibility !== 'hidden'
			);
		}
	);
};
