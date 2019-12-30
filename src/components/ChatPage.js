import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import MessageInput from './MessageInput';
import MessageList from './MessageList';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

function ChatPage(props) {
	const { data, sendMessage } = props;
	const { chatName } = useParams();

	if (data.chats[chatName] === undefined) {
		return 'No chat with such name exists';
	}

	return (
		<Container>
			<MessageList messages={data.chats[chatName].messages} />
			<MessageInput submitHandler={(value) => sendMessage(value, chatName)} />
		</Container>
	);
}

ChatPage.propTypes = {
	data: PropTypes.shape({
		chats: PropTypes.objectOf(PropTypes.object),
	}).isRequired,
	sendMessage: PropTypes.func.isRequired,
};

export default ChatPage;
