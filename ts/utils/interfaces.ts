export interface fetchOptions {
	method: string;
	headers: {
		[header: string]: string;
	};
	body: string;
}

export interface translationDict {
	[lang: string]: string;
}

export interface cacheDict {
	[text: string]: translationDict;
}

export interface responseData {
	code: number;
	lang: string;
	text: string[];
}
