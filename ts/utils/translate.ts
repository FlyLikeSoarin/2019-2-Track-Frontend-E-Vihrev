import { getFromCacheOrFetch } from './cache';

export interface translation {
	ok: boolean;
	status: string;
	text?: string[];
}

export function translate(
	text: string,
	langFrom: string | undefined,
	langTo: string,
	callback: Function,
): void {
	let lang: string = langFrom !== undefined ? `${langFrom}-${langTo}` : langTo;

	getFromCacheOrFetch(text, lang)
		.then(function(text: string[]): void {
			callback({
				ok: true,
				status: 'ok',
				text: text,
			});
		})
		.catch(function(error: string): void {
			callback({
				ok: false,
				status: error,
			});
		});
}
