import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import store from './store';
import Routes from './routes';
import './styles/globalStyles.css';
import * as serviceWorker from './utils/serviceWorker';
import * as Sentry from '@sentry/browser';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

Sentry.init({
	dsn:
		'https://3f0bdfecff1d4a6485ee694d4fe78600@o392764.ingest.sentry.io/5240901',
});

const options = {
	position: 'bottom center',
	type: 'error',
	timeout: 5000,
	offset: '30px',
	transition: 'scale',
};

render(
	<AlertProvider template={AlertTemplate} {...options}>
		<Provider store={store}>
			<Routes />
		</Provider>
	</AlertProvider>,
	document.getElementById('root'),
);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
