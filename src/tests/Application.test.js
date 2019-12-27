import React from 'react';
import ReactDOM from 'react-dom';
import Routes from '../routes/index.js';

it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<Routes />, div);
});
