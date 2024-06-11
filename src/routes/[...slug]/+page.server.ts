import { fetchFromHN } from '$lib/api';
import type { Post } from '../../types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ params }) => {
	const { data, error } = await fetchFromHN<Post[]>(params.slug);
	return { content: data, error };
};
