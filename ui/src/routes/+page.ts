import type { PageLoad } from './$types';
import type { job } from './types';
import { PUBLIC_API_URL } from '$env/static/public';

export const load = (async () => {
	const res = await (await fetch(`${PUBLIC_API_URL}/api/get-jobs?sort_by=created_at:desc`)).json();

	console.log(res);

	return { jobs: res.data as job[] };
}) satisfies PageLoad;
