import { getFromCacheOrFetch } from './cache';
import key from './APIKey';
const fetch = require('node-fetch');

export interface translation {
  ok: boolean;
  status: string;
  text?: string[];
}

export interface languageList {
  [lang: string]: string
}

export interface languages {
  ok: boolean;
  status: string;
  langs?: languageList
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

export function getLanguages(callback: Function): void {
  fetch(
    `https://translate.yandex.net/api/v1.5/tr.json/getLangs?key=${key}&ui=en`,
    {
      method: 'POST',
      headers: {
        Host: 'translate.yandex.net',
        Accept: '*/*',
      }
    }
  ).then(
    function(response: any): any {
      if (response.ok) {
        return response.json();
      } else {
        throw Error('Bad request');
      }
    },
    (error: any) => {
      throw Error('Problems with network');
    }
  ).then(function(json: {langs: languageList}): void {
    callback({
      ok: true,
      status: 'ok',
      langs: json.langs,
    });
  }).catch(function(error: string): void {
    callback({
      ok: false,
      status: error,
    });
  });
}
