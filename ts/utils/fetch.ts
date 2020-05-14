import { responseData, fetchOptions } from './interfaces';
import key from './APIKey';

const fetch: any = require('node-fetch');

function getPostOptions(text: string): fetchOptions {
	let body: string = `text=${text}`;
	return {
		method: 'POST',
		headers: {
			Host: 'translate.yandex.net',
			Accept: '*/*',
			'Content-Type': 'application/x-www-form-urlencoded',
			'Content-Lent': body.length.toString(),
		},
		body: body,
	};
}

export function fetchTranslation(
	text: string,
	lang: string,
	cachePassThrough: Function,
): any {
	return fetch(
		`https://translate.yandex.net/api/v1.5/tr.json/translate` +
			`?key=${key}` +
			`&lang=${lang}`,
		getPostOptions(text),
	)
		.then(
			function(response: any): responseData {
				if (response.ok) {
					return response.json();
				} else {
					// Error on request level
					throw 'Bad request';
				}
			},
			(error: any) => {
				// Error on network level
				throw 'Problems with network';
			},
		)
		.then(function(data: responseData): string[] {
			cachePassThrough(text, lang, data.text);

			return data.text;
		});
}
