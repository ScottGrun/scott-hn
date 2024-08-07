const API_BASE_URL = 'http://api.hackerwebapp.com';

const formatSlug = (slug: string) => {
	const slugWithSlash = slug.startsWith('/') ? slug : `/${slug}`;
	return slugWithSlash === '/' ? '/news' : slugWithSlash;
};

export const fetchFromHN = async <T>(slug: string) => {
	const formattedSlug = formatSlug(slug);

	let data: T | null = null;
	let error: Error | null = null;
	try {
		const response = await fetch(`${API_BASE_URL}${formattedSlug}`);
		data = await response.json();
	} catch (err) {
		error = err as Error | null;
	}
	return { data, error };
};
