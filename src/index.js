import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import './styles/globalStyles.css';
import * as serviceWorker from './utils/serviceWorker';
import * as Sentry from '@sentry/browser';

Sentry.init({
	dsn:
		'https://3f0bdfecff1d4a6485ee694d4fe78600@o392764.ingest.sentry.io/5240901',
});

render(
	<Provider store={store}>
		<Routes />
	</Provider>,
	document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
