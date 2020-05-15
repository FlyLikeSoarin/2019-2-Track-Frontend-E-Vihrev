import TranslateUtils from './index';

test('Test translator', done => {
  var finished: number = 0;

  TranslateUtils.translate(
    'And his name is John Cena',
    'en',
    'ru',
    (t: TranslateUtils.translation) => {
      if (t.ok) {
        if ((t.text as string[])[0] === 'И его имя Джон Сина') {
          finished++;
          if (finished === 3) {done()} else {
            console.log('EN to RU passed');
          }
        } else {
          throw done(Error('EN to RU failed'));
        }
      } else {
        throw done(Error(t.status));
      }
    },
  );

  TranslateUtils.translate(
    'И его имя Джон Сина',
    'ru',
    'en',
    (t: TranslateUtils.translation) => {
      if (t.ok) {
        if ((t.text as string[])[0] === 'And his name is John Cena') {
          finished++;
          if (finished === 3) {done()} else {
            console.log('EN to RU passed');
          }
        } else {
          done(Error('RU to EN failed'));
        }
      } else {
        throw done(Error(t.status));
      }
    },
  );

  TranslateUtils.translate(
    'And his name is John Cena',
    undefined,
    'ru',
    (t: TranslateUtils.translation) => {
      if (t.ok) {
        if ((t.text as string[])[0] === 'И его имя Джон Сина') {
          finished++;
          if (finished === 3) {done()} else {
            console.log('EN to RU passed');
          }
        } else {
          done(Error('Auto to RU failed'));
        }
      } else {
        throw done(Error(t.status));
      }
    },
  );
})
