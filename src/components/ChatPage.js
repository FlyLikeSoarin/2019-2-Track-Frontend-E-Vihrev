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
	const { chats, chatMessages, sendMessage, profileInfo } = props;
	const { chatId } = useParams();

	if (chats[chatId] === undefined) {
		return 'No chat with such name exists';
	}

	const messages = chatMessages[chatId];

	return (
		<Container>
			<MessageList messages={messages} profileInfo={profileInfo} />
			<MessageInput submitHandler={(value) => sendMessage(value, chatId)} />
		</Container>
	);
}

ChatPage.propTypes = {
	chats: PropTypes.objectOf(
		PropTypes.objectOf(
			PropTypes.shape({
				chatLabel: PropTypes.string,
			}),
		),
	).isRequired,
	chatMessages: PropTypes.arrayOf(
		PropTypes.objectOf(
			PropTypes.shape({
				id: PropTypes.number,
			}),
		),
	).isRequired,
	profileInfo: PropTypes.objectOf(
		PropTypes.shape({
			user: PropTypes.number,
		}),
	).isRequired,
	sendMessage: PropTypes.func.isRequired,
};

export default ChatPage;
