export interface Post {
	id: number;
	title: string;
	points: number;
	user: string;
	time: number;
	time_ago: string;
	comments_count: number;
	type: string;
	url: string;
	domain: string;
}

export interface PostComment {
	id: number;
	level: number;
	user: string;
	time: number;
	time_ago: string;
	content: string;
	comments: PostComment[];
}

export interface PostContent extends Post {
	comments: PostComment[];
}
