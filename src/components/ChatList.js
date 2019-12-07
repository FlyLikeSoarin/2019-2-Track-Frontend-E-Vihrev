import React from 'react';
import PropTypes from 'prop-types';
import NewChatButton from './NewChatButton';
import ChatEntry from './ChatEntry';
import styled from '@emotion/styled';

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

		this.state = {
			chats: []
		};

		this.storage = window.localStorage;

		this.addChatBounded = this.addChat.bind(this);
		this.chatSelectionHandlerBounded = this.chatSelectionHandler.bind(this);
	}

	onChatSelection(name, icon, displayName) {
		this.updateQueue.push(name);
		this.applicationCallback('load-chat-and-switch', {
			name,
			icon,
			displayName
		}
		);
	}

	addChat(name) {
		const validName = name.split(' ').join('');
		const chatData = { name: validName, messages: [], icon: null, displayName: name };
		// this.renderChat(chatData);
		// this.saveNewChat(chatData);
		this.props.setData((data)=>{
			const dataCopy = Object.assign({}, data);
			dataCopy.chats[chatData.name] = chatData;
			return dataCopy;
		});
	}

	chatSelectionHandler(name) {
		this.props.chatSelectionHandler(this.props.data.chats[name]);
	}

	renderChats() {
		const result = [];
		let i = 0;
		for (const name in this.props.data.chats) {
			if (true) {
				const chatData = this.props.data.chats[name];
				result.push(React.createElement(ChatEntry, {
					key: (i += 1).toString(),
					name: chatData.name,
					username: chatData.displayName,
					messages: chatData.messages,
					userIcon: chatData.icon,
					chatSelectionHandler: this.chatSelectionHandlerBounded,
				}));
			}
		}
		return result;
	}

	render() {
		return (
			<OuterContainer>
				<ScrollBodyContainer>
					<ScrollBody>
						{this.renderChats()}
					</ScrollBody>
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
		chats: PropTypes.objectOf(PropTypes.object)
	}).isRequired,
	chatSelectionHandler: PropTypes.func.isRequired,
	setData: PropTypes.func.isRequired,
};

export default ChatList;
