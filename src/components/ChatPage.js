import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { useParams } from 'react-router-dom';
import InputForm from './InputForm';
import MessageList from './MessageList';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	height: 100%;
`;

function ChatPage(props) {
	const { data, sendMessage } = props;
	const InputFormStyle = {
		borderStyle: 'solid',
		borderTopWidth: '2px',
		borderColor: '#333',
	};
	const { chatName } = useParams();

	if (data.chats[chatName] === undefined) {
		return 'No chat with such name exists';
	}

	return (
		<Container>
			<MessageList messages={data.chats[chatName].messages} />
			<InputForm
				name="message-text"
				placeholder="Message..."
				submitHandler={(value) => sendMessage(value, chatName)}
				style={InputFormStyle}
			/>
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
