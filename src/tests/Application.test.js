import React from 'react';
import ReactDOM from 'react-dom';
import Application from '../components/Application.js';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Application />, div);
});
