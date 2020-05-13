import React from 'react';
import styled from '@emotion/styled';
import { Route, Switch, Redirect } from 'react-router-dom';
import HeaderContainer from './HeaderContainer';
import LoginPageContainer from './LoginPageContainer';
import ChatListContainer from './ChatListContainer';
import ChatPageContainer from './ChatPageContainer';
import ProfilePageContainer from './ProfilePageContainer';
import { fetchMessages } from '../actions/appData';
import { history } from '../routes';
import store from '../store';

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

function pollingAction() {
	if (store.getState().profileInfo.auth.token !== undefined) {
		const matches = history.location.pathname.toString().match(/\/chat\/(.*)/);
		if (matches != null) {
			if (matches.length === 2) {
				store.dispatch(fetchMessages(matches[1]));
			}
		} else {
			const chats = Object.keys(store.getState().appData.chats);
			const chatId = chats[Math.floor(Math.random() * chats.length)];
			store.dispatch(fetchMessages(chatId));
		}
	}
}

class Application extends React.Component {
	componentDidMount() {
		pollingAction();
		this.dataPolling = setInterval(() => {
			pollingAction();
		}, 1500);
	}

	componentWillUnmount() {
		clearInterval(this.dataPolling);
	}

	render() {
		return (
			<OuterContainer>
				<AppContainer>
					<HeaderContainer />
					<ContentContainer>
						<Switch>
							<Route path="/login">
								<LoginPageContainer />
							</Route>
							<Route path="/chats">
								<ChatListContainer />
							</Route>
							<Route path="/chat/:chatId">
								<ChatPageContainer />
							</Route>
							<Route path="/profile">
								<ProfilePageContainer />
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
