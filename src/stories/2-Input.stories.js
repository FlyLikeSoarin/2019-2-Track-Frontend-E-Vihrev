import React from 'react';
import { action } from '@storybook/addon-actions';
import InputForm from '../components/InputForm';
import MessageInput from '../components/MessageInput';

export default {
	title: 'Inputs',
	parameters: {
		backgrounds: [{ name: 'dark background', value: '#8e24aa', default: true }],
	},
	decorators: [
		(storyFn) => (
			<div style={{ position: 'fixed', width: '50%', left: '25%', top: '50%' }}>
				{storyFn()}
			</div>
		),
	],
};

export const inputForm = () => (
	<InputForm name="snapshot-input" submitHandler={action('Submited')} />
);

export const messageInput = () => (
	<MessageInput submitHandler={action('Submited')} />
);
