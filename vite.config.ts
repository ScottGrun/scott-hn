import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import svg from '@poppanator/sveltekit-svg';

export default defineConfig({
	ssr: {
		external: ['canvas', 'jsdom']
	},
	plugins: [
		sveltekit(),
		svg({
			includePaths: ['./src/lib/assets/icons/']
		})
	]
});
