import { fetchFromHN } from '$lib/api';
import type { PostComment, PostContent } from '../../types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ url }) => {
	const { data, error } = await fetchFromHN<PostContent>(
		`${url.pathname}/${url.searchParams.get('id')}`
	);
	return { post: data, error };
};
