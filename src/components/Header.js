import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { Route, Switch, Link, useParams } from 'react-router-dom';
import HeaderMenu from './HeaderMenu';
import backImg from '../assets/back.png';
import menuImg from '../assets/menu.png';
import searchImg from '../assets/search-icon.png';
import noUserIcon from '../assets/no-user-icon.png';

const Container = styled.div`
	display: contents;
`;

const HeaderBox = styled.div`
	background-color: #8e24aa;
	font-weight: bold;
	color: white;
	font-size: 40px;
	height: 1.3em;
	display: flex;
	flex-direction: row;
	z-index: 2;
`;

const BackgroundBox = styled.div`
	background-color: #8e24aa;
	font-size: 40px;
	height: 1.3em;
	position: fixed;
	left: -100%;
	width: 300%;
	z-index: 1;
`;

const Title = styled.div`
	/* padding-top: 0.4em; */
`;

const TitleContatiner = styled.div`
	padding-left: 1em;
	height: 1.3em;
	display: flex;
	flex-direction: row;
	flex-grow: 1;
`;

const ButtonIcon = styled.img`
	position: relative;
	left: 0.6em;
	height: 1em;
	weigth: 1em;

	margin: 0.05em;
	padding: 0.1em;
	border-radius: 50%;
	transition: 0.3s;
	&:hover {
		background: #ffffff55;
		transition: 0.3s;
	}
`;

const SearchIcon = styled.img`
	position: relative;
	right: 0.6em;
	height: 1em;
	weigth: 1em;

	margin: 0.05em;
	padding: 0.1em;
	border-radius: 50%;
	transition: 0.3s;
	&:hover {
		background: #ffffff55;
		transition: 0.3s;
	}
`;

const MenuContainer = styled.div`
	position: relative;
	width: 0px;
`;

const UserIcon = styled.img`
	position: relative;
	flex-basis: 1.1em;
	padding-right: 0.3em;
	top: 0.1em;
	height: 1.1em;
	weigth: 1.1em;
`;

class Header extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			isMenuDisplayed: false,
		};
	}

	render() {
		const { isMenuDisplayed } = this.state;
		const { searchHandler, data } = this.props;
		const menuStyle = { display: isMenuDisplayed ? 'flex' : 'none' };
		const linkStyle = { display: 'contents' };

		return (
			<Container>
				<BackgroundBox />
				<HeaderBox>
					<ButtonIcon
						src={menuImg}
						onClick={() =>
							this.setState((oldState) => ({
								isMenuDisplayed: !oldState.isMenuDisplayed,
							}))
						}
					/>
					<MenuContainer>
						<HeaderMenu
							style={menuStyle}
							collapse={() =>
								this.setState((oldState) => ({
									isMenuDisplayed: !oldState.isMenuDisplayed,
								}))
							}
						/>
					</MenuContainer>
					<Switch>
						<Route path="/chats" />
						<Route path="*">
							<Link to="/chats" style={linkStyle}>
								<ButtonIcon src={backImg} />
							</Link>
						</Route>
					</Switch>
					<TitleContatiner>
						<Switch>
							<Route path="/chats">Messages</Route>
							<Route path="/chat/:chatName">
								<ChatTitle data={data} />
							</Route>
							<Route path="/profile" />
							<Route path="/settings">Settings</Route>
						</Switch>
					</TitleContatiner>
					<SearchIcon src={searchImg} onClick={searchHandler} />
				</HeaderBox>
			</Container>
		);
	}
}

function ChatTitle(props) {
	const { data } = props;
	const { chatName } = useParams();
	const { displayedName, icon } = data.chats[chatName];

	return (
		<Title>
			<UserIcon src={icon === null ? noUserIcon : icon} />
			{displayedName}
		</Title>
	);
}

ChatTitle.propTypes = {
	data: PropTypes.shape({
		chats: PropTypes.objectOf(PropTypes.object),
		myProfile: PropTypes.object,
	}).isRequired,
};

Header.defaultProps = {
	searchHandler: () => {},
};

Header.propTypes = {
	searchHandler: PropTypes.func,
	data: PropTypes.shape({
		chats: PropTypes.objectOf(PropTypes.object),
		myProfile: PropTypes.object,
	}).isRequired,
};

export default Header;
