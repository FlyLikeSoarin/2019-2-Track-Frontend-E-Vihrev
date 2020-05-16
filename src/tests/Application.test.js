import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';
import Routes from '../routes';
import '../styles/globalStyles.css';
import store from '../store';

const options = {
	position: 'bottom center',
	type: 'error',
	timeout: 5000,
	offset: '30px',
	transition: 'scale',
};

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(
		<AlertProvider template={AlertTemplate} {...options}>
			<Provider store={store}>
				<Routes />
			</Provider>
		</AlertProvider>,
		div,
	);
});
