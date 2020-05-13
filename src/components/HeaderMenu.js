import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';
import stylePropType from 'react-style-proptype';
import { Link } from 'react-router-dom';

const MenuContainer = styled.div`
	position: absolute;
	top: 1.3em;
	left: -0.2em;
	display: flex;
	flex-direction: column;
	background-color: #222222aa;
	padding: 0.2em;
	border-radius: 0em 0.3em 0.3em 0.3em;
`;

const StyledButton = styled.div`
	color: #0099cc;
	background: transparent;
	border-radius: 5px;
	text-decoration: none;
	text-transform: uppercase;
	color: white;
	padding: 8px 12px;
	text-align: center;
	text-decoration: none;
	display: inline-block;
	font-size: 16px;
	margin: 4px 2px;
	transition-duration: 0.4s;
	cursor: pointer;

	background-color: white;
	color: black;
	/* border: 2px solid blue; */

	:hover {
		background-color: #8e24aa !important;
		color: white;
	}
`;

function HeaderMenu(props) {
	const linkStyle = { display: 'contents' };
	const { style, collapse, logout } = props;

	const onLogOut = () => {
		collapse();
		logout();
	};

	return (
		<MenuContainer style={style}>
			<Link to="/chats" style={linkStyle}>
				<StyledButton onClick={collapse}>Messages</StyledButton>
			</Link>
			<Link to="/profile" style={linkStyle}>
				<StyledButton onClick={collapse}>Profile</StyledButton>
			</Link>
			<Link to="/settings" style={linkStyle}>
				<StyledButton onClick={collapse}>Settings</StyledButton>
			</Link>
			<StyledButton onClick={onLogOut}>Log out</StyledButton>
		</MenuContainer>
	);
}

HeaderMenu.defaultProps = {
	style: {},
};

HeaderMenu.propTypes = {
	style: stylePropType,
	collapse: PropTypes.func.isRequired,
	logout: PropTypes.func.isRequired,
};

export default HeaderMenu;
