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

		this.storage = window.localStorage;

		this.addChatBounded = this.addChat.bind(this);
	}

	addChat(name) {
		const { setData } = this.props;
		const validName = name.split(' ').join('');
		const chatData = {
			chatId: validName,
			messages: [],
			icon: null,
			displayedName: name,
		};

		setData((data) => {
			const dataCopy = { ...data };
			dataCopy.chats[chatData.chatId] = chatData;
			return dataCopy;
		});
	}

	renderChats() {
		const { data } = this.props;
		const result = [];

		for (const key in data.chats) {
			if (key !== undefined) {
				const chatData = data.chats[key];
				result.push(
					React.createElement(ChatEntry, {
						key: `${chatData.type}/${chatData.chatId.toString()}`,
						chatId: chatData.chatId.toString(),
						username: chatData.displayedName,
						messages: chatData.messages,
						userIcon: chatData.icon,
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
	data: PropTypes.shape({
		chats: PropTypes.objectOf(PropTypes.object),
	}).isRequired,
	setData: PropTypes.func.isRequired,
};

export default ChatList;
