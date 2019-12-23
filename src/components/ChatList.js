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

    // this.addChatBounded = this.addChat.bind(this);
    // this.chatSelectionHandlerBounded = this.chatSelectionHandler.bind(this);
  }

  // onChatSelection(name, icon, displayName) {
  // 	this.updateQueue.push(name);
  // 	this.applicationCallback('load-chat-and-switch', {
  // 		name,
  // 		icon,
  // 		displayName,
  // 	});
  // }

  // addChat(name) {
  // 	const { setData } = this.props;
  // 	const validName = name.split(' ').join('');
  // 	const chatData = {
  // 		name: validName,
  // 		messages: [],
  // 		icon: null,
  // 		displayName: name,
  // 	};
  //
  // 	setData((data) => {
  // 		const dataCopy = { ...data };
  // 		dataCopy.chats[chatData.name] = chatData;
  // 		return dataCopy;
  // 	});
  // }

  // chatSelectionHandler(name) {
  // 	const { data, chatSelectionHandler } = this.props;
  // 	chatSelectionHandler(data.chats[name]);
  // }

  renderChats() {
    const { data } = this.props;
    const result = [];

    for (const i in data.chats) {
      if (i !== undefined) {
        let chatData = data.chats[i]
        result.push(
          React.createElement(ChatEntry, {
            key: chatData.type + '/' + chatData.chat_id.toString(),
            type: chatData.type,
            chat_id: chatData.chat_id.toString(),
            username: chatData.displayName,
            lastMessage: chatData.lastMessage,
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
    chats: PropTypes.arrayOf(PropTypes.object),
  }).isRequired,
  setData: PropTypes.func.isRequired,
};

export default ChatList;
