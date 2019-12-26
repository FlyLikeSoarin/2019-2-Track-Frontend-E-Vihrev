import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch, Redirect } from 'react-router-dom';
import Header from './Header';
import ChatList from './ChatList';
import ChatPage from './ChatPage';
import ProfilePage from './ProfilePage';

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
			data: this.loadData(),
		};

		this.setDataBounded = this.setData.bind(this);
		this.sendMessageBounded = this.sendMessage.bind(this);
	}

	setData(updater) {
		this.setState((prevState) => ({ data: updater(prevState.data) }));

		const { data } = this.state;
		this.storage.setItem('Chat_local_cache', JSON.stringify(data));
	}

	loadData() {
		let data = this.storage.getItem('Chat_local_cache');
		if (data == null) {
			data = { chats: {} };
			this.storage.setItem('Chat_local_cache', JSON.stringify(data));
		} else {
			data = JSON.parse(this.storage.getItem('Chat_local_cache'));
		}

		data.myProfile = {
			id: '1',
			displayedName: 'FlyLikeSoarin',
			userIcon: undefined,
			information: {
				'Phone number': '+7-985-290-2394',
				Location: 'Moscow, Russia',
				Birthday: '22.01.1999',
			},
		};

		return data;
	}

	sendMessage(value, name) {
		if (value !== '') {
			const message = { name: '', timestamp: '', text: '' };
			message.text = value;
			message.name = 'me';
			message.timestamp = new Date().toLocaleTimeString('en-US', {
				hour12: false,
				hour: 'numeric',
				minute: 'numeric',
			});
			this.setData((oldData) => {
				oldData.chats[name].messages.push(message);
				return oldData;
			});
		}
	}

	render() {
		const { data } = this.state;

		return (
			<OuterContainer>
				<AppContainer>
					<Header data={data} />
					<ContentContainer>
						<Switch>
							<Route path="/chats">
								<ChatList data={data} setData={this.setDataBounded} />
							</Route>
							<Route path="/chat/:chatName">
								<ChatPage
									data={data}
									setData={this.setDataBounded}
									sendMessage={this.sendMessageBounded}
								/>
							</Route>
							<Route path="/dialog/:chatName">
								<ChatPage
									data={data}
									setData={this.setDataBounded}
									sendMessage={this.sendMessageBounded}
								/>
							</Route>
							<Route path="/profile">
								<ProfilePage profile={data.myProfile} />
							</Route>
							<Route path="/settings">...</Route>
							<Redirect from="/" to="/chats" />
						</Switch>
					</ContentContainer>
				</AppContainer>
			</OuterContainer>
		);
	}
}

export default Application;
