import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load() {
	let hero_video = '/video/Homepage Header v2.mp4';

	return { hero_video };
}
