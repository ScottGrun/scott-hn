import type { Post } from '../../types';
import type { PageServerLoad } from './$types';

const API_BASE_URL = 'http://api.hackerwebapp.com';

const formatSlug = (slug: string) => {
	return slug.startsWith('/') ? slug : `/${slug}`;
};

export const load: PageServerLoad = async ({ params }) => {
	const slug = formatSlug(params.slug);
	const formattedPath = slug === '/' ? '/news' : slug;

	let content: Post[] | null = null;
	let error: Error | null = null;
	try {
		const response = await fetch(`${API_BASE_URL}${formattedPath}`);
		content = await response.json();
	} catch (error) {
		error = error;
	}
	return { content, error };
};
