import React from 'react';
import Header from './Header';
import ChatList from './ChatList';
import ChatPage from './ChatPage';
import styled from '@emotion/styled';

const OuterContainer = styled.div`
  background-color: #333;
  height: 100vh;
`;

const AppContainer = styled.div`
  height: 85vh;
  width: 60%;
  margin-left: 20%;
  margin-right: 20%;
  display: flex;
  flex-direction: column;
  background-color: #fff;
`;

const ContentContainer = styled.div`
  height: 10%;
  flex-grow: 1;
`;

class Application extends React.Component {
	constructor(props) {
		super(props);
		this.storage = window.localStorage;

		this.state = {
			headerText: 'Messenger',
			headerIcon: undefined,
			headerMode: 'menu',
			displayedPage: 'chat-list',
			data: this.loadData(),
		};

		this.chatSelectionHandlerBounded = this.chatSelectionHandler.bind(this);
		this.setDataBounded = this.setData.bind(this);
		this.headerEventHandlerBounded = this.headerEventHandler.bind(this);
	}

	getCurrentPage() {
		switch (this.state.displayedPage) {
			case 'chat-list':
				// return (<ChatList />);
				return (
					<ChatList
						chatSelectionHandler={this.chatSelectionHandlerBounded}
						data={this.state.data}
						setData={this.setDataBounded}
					/>);
			case 'chat-page':
				// return (<ChatPage />)
				return (
					<ChatPage
						name={this.state.currentCharName}
						data={this.state.data}
						setData={this.setDataBounded}
					/>);
			default:
				return 'Page does not exist.';
		}
	}

	setData(updater) {
		this.setState((prevState) => ({data: updater(prevState.data)}));
		this.storage.setItem('Chat_local_cache', JSON.stringify(this.state.data));
	}

	loadData() {
		let data = this.storage.getItem('Chat_local_cache');
		if (data == null) {
			data = { chats: {} };
			this.storage.setItem('Chat_local_cache', JSON.stringify(this.state.data));
		} else {
			data = JSON.parse(this.storage.getItem('Chat_local_cache'));
		}
		return data;
	}

	toChatList() {
		this.setState({
			headerText: 'Messenger',
			headerIcon: undefined,
			headerMode: 'menu',
			displayedPage: 'chat-list',
		});
	}

	// messageFormEventListener(type, contents) {
	//
	// }

	headerEventHandler(type, data) {
		switch(type) {
			case 'back':
				this.toChatList();
				break;
		}
	}

	chatSelectionHandler(chatData) {
		this.setState({
			currentCharName: chatData.name,
			headerText: chatData.displayName,
			headerIcon: chatData.icon,
			headerMode: 'back',
			displayedPage: 'chat-page',
		});
	}

	render() {
		return (
			<OuterContainer>
				<AppContainer>
					<Header
						text={this.state.headerText}
						icon={this.state.headerIcon}
						mode={this.state.headerMode}
						eventHandler={this.headerEventHandlerBounded}
					/>
					<ContentContainer>
						{this.getCurrentPage()}
					</ContentContainer>
				</AppContainer>
			</OuterContainer>
		);
	}
}

export default Application;
