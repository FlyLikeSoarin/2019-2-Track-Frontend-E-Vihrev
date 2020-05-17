import React from 'react';
import renderer from 'react-test-renderer';

import InputForm from '../components/InputForm/';
import NewChatButton from '../components/NewChatButton';
import MessageEntry from '../components/MessageEntry';
import MessageInput from '../components/MessageInput';

it('InputForm renders correctly', () => {
	const tree = renderer
		.create(<InputForm name="snapshot-input" submitHandler={() => {}} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('NewChatButton renders correctly', () => {
	const tree = renderer
		.create(<NewChatButton newChatHandler={() => {}} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('MessageEntry renders correctly', () => {
	const tree = renderer
		.create(
			<MessageEntry
				isFromUser={false}
				username="user"
				text="snapshot"
				timestamp="00:00:00"
			/>,
		)
		.toJSON();
	expect(tree).toMatchSnapshot();
});

it('MessageInput renders correctly', () => {
	const tree = renderer
		.create(<MessageInput submitHandler={() => {}} />)
		.toJSON();
	expect(tree).toMatchSnapshot();
});
