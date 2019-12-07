import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
import logo from '../assets/logo.svg';
import backImg from '../assets/back.png';
import menuImg from '../assets/menu.png';
import searchImg from '../assets/search-icon.png';
import noUserIcon from '../assets/no-user-icon.png';

const Container = styled.div`
  display: contents;
`;

const HeaderBox = styled.div`
  background-color: #8E24AA;
  font-weight: bold;
  color: white;
  font-size: 40px;
  height: 1.3em;
  display: flex;
  flex-direction: row;
  z-index: 2;
`;

const BackgroundBox = styled.div`
  background-color: #8E24AA;
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
  padding: 0.10em;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
  background: #FFFFFF55;
  transition: 0.3s;
  }
`;

const SearchIcon = styled.img`
  position: relative;
  right: 0.6em;
  height: 1em;
  weigth: 1em;

  margin: 0.05em;
  padding: 0.10em;
  border-radius: 50%;
  transition: 0.3s;
  &:hover {
  background: #FFFFFF55;
  transition: 0.3s;
  }
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

		this.LeftButtonHandlerBounded = this.LeftButtonHandler.bind(this);
	}

	getUserIcon() {
		if (this.props.icon === undefined) {
			return '';
		}
		return (<UserIcon
			src={this.props.icon != null ? this.props.icon : noUserIcon}
		/>);
	}

	getLeftButtonImg() {
		switch (this.props.mode) {
			case 'back':
				return backImg;
			case 'menu':
				return menuImg;
			default:
				return '';
		}
	}

	LeftButtonHandler() {
		switch (this.props.mode) {
			case 'back':
				this.props.eventHandler('back', null);
			case 'menu':
		}
	}

	render() {
		return (
			<Container>
				<BackgroundBox />
				<HeaderBox>
					<ButtonIcon
						src={this.getLeftButtonImg()}
						onClick={this.LeftButtonHandlerBounded}
					/>
					<TitleContatiner>
						{this.getUserIcon()}
						<Title>
							{this.props.text}
						</Title>
					</TitleContatiner>
					<SearchIcon
						src={searchImg}
						onClick={this.props.searchHandler}
					/>
				</HeaderBox>
			</Container>
		);
	}
}

Header.defaultProps = {
	icon: undefined,
	searchHandler: ()=>{},
};

Header.propTypes = {
	eventHandler: PropTypes.func.isRequired,
	searchHandler: PropTypes.func,
	mode: PropTypes.oneOf(['back', 'menu']).isRequired,
	text: PropTypes.string.isRequired,
	icon: PropTypes.string,
};

export default Header;
