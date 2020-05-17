import React from 'react';
import { action } from '@storybook/addon-actions';
import NewChatButton from '../components/NewChatButton';

export default {
	title: 'NewChatButton',
	decorators: [
		(storyFn) => (
			<div style={{ position: 'fixed', left: '40%', top: '40%' }}>
				{storyFn()}
			</div>
		),
	],
};

export const newChatButton = () => (
	<NewChatButton newChatHandler={action('Submited')} />
);
