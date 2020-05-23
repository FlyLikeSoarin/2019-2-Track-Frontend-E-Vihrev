import TranslateUtils from './index';

async function Test() {
	await TranslateUtils.translate(
		'And his name is John Cena',
		'en',
		'ru',
		(t: TranslateUtils.translation) => {
			if (t.ok) {
				if ((t.text as string[])[0] === 'И его имя Джон Сина') {
					console.log('EN to RU passed');
				} else {
					throw 'EN to RU failed';
				}
			} else {
				throw t.status;
			}
		},
	);

	await TranslateUtils.translate(
		'И его имя Джон Сина',
		'ru',
		'en',
		(t: TranslateUtils.translation) => {
			if (t.ok) {
				if ((t.text as string[])[0] === 'And his name is John Cena') {
					console.log('RU to EN passed');
				} else {
					throw 'RU to EN failed';
				}
			} else {
				throw t.status;
			}
		},
	);

	await TranslateUtils.translate(
		'And his name is John Cena',
		undefined,
		'ru',
		(t: TranslateUtils.translation) => {
			if (t.ok) {
				if ((t.text as string[])[0] === 'И его имя Джон Сина') {
					console.log('Auto to EN passed');
				} else {
					throw 'Auto to RU failed';
				}
			} else {
				throw t.status;
			}
		},
	);
}

Test();
