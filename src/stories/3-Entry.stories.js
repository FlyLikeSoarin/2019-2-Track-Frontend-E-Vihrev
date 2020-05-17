import React from 'react';
import MessageEntry from '../components/MessageEntry';

export default {
	title: 'MessageEntry',
	decorators: [
		(storyFn) => (
			<div style={{ position: 'fixed', left: '30%', top: '40%' }}>
				{storyFn()}
			</div>
		),
	],
};

export const messageEntry = () => (
	<MessageEntry
		isFromUser={false}
		username="Friend"
		text="Hey, are you making a storybook tonight?"
		timestamp="00:00:00"
	/>
);
