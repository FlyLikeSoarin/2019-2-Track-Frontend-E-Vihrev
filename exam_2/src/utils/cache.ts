import { cacheDict, translationDict } from './interfaces';
import { fetchTranslation } from './fetch';

class Store {
	static cache: cacheDict = {};
}

function updateCache(text: string, lang: string, translation: string): void {
	if (text in Store.cache) {
		Store.cache[text][lang] = translation;
	} else {
		let translations: translationDict = {};
		translations[lang] = translation;
		Store.cache[text] = translations;
	}
}

export function getFromCacheOrFetch(text: string, lang: string): any {
	if (text in Store.cache) {
		let translations: translationDict = Store.cache[text];
		if (lang in translations) {
			// Take from cache
			return new Promise((resolve: Function, reject: Function) => {
				resolve(translations[lang]);
			});
		}
	}
	// Need to update cache
	return fetchTranslation(text, lang, updateCache);
}
