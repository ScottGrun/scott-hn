import defaultTheme from 'tailwindcss/defaultTheme';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				mono: ['IBM Plex Mono', ...defaultTheme.fontFamily.mono],
				sans: ['Noto Sans Variable', ...defaultTheme.fontFamily.sans]
			}
		}
	},
	plugins: []
};