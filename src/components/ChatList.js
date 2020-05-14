import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import NewChatButton from './NewChatButton';
import ChatEntry from './ChatEntry';

const OuterContainer = styled.div`
	height: 100%;
`;

const ScrollBodyContainer = styled.div`
	display: block;
	height: 100%;
	overflow-y: scroll;
`;

const ScrollBody = styled.div``;

const OuterNewChatButtonContainer = styled.div`
	position: relative;
	display: block;
`;

const NewChatButtonContainer = styled.div`
	position: absolute;
	right: 0px;
	bottom: 0px;
`;

class ChatList extends React.Component {
	constructor(props) {
		super(props);

		this.addChatBounded = this.addChat.bind(this);
	}

	addChat(label) {
		const { createChat } = this.props;
		createChat(label);
	}

	renderChats() {
		const { chats } = this.props;
		const result = [];

		for (const key in chats) {
			if (key !== undefined) {
				const chatData = chats[key];
				result.push(
					React.createElement(ChatEntry, {
						key: `${chatData.type}/${chatData.id.toString()}`,
						chatId: chatData.id.toString(),
						username: chatData.chatLabel,
						lastMessage: chatData.lastMessage,
					}),
				);
			}
		}
		return result;
	}

	render() {
		return (
			<OuterContainer>
				<ScrollBodyContainer>
					<ScrollBody>{this.renderChats()}</ScrollBody>
				</ScrollBodyContainer>
				<OuterNewChatButtonContainer>
					<NewChatButtonContainer>
						<NewChatButton newChatHandler={this.addChatBounded} />
					</NewChatButtonContainer>
				</OuterNewChatButtonContainer>
			</OuterContainer>
		);
	}
}

ChatList.propTypes = {
	chats: PropTypes.objectOf(PropTypes.object).isRequired,
	createChat: PropTypes.func.isRequired,
};

export default ChatList;
