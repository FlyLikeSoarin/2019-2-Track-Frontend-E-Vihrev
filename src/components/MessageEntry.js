import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';
// import logo from '../assets/logo.svg';
// import backImg from '../assets/back.png';
// import menuImg from '../assets/menu.png';
// import searchImg from '../assets/search-icon.png';
// import noUserIcon from '../assets/no-user-icon.png';

const MessageOuterBox = styled.div`
	display: flex;
	flex-direction: column;
	font-size: 20px;
`;

const fadein = keyframes`
  from { opacity: 0; }
  to   { opacity: 1; }
`;

const WidthHolder = styled.div`
	max-width: 80%;
	overflow-wrap: break-word;
	/* background-color: blue; */
	/* display: flex; */
	/* flex-direction: column; */
	align-self: flex-end;
	animation: fadein 0.6s;
`;

const MessageBox = styled.div`
	position: relative;
	right: 0px;
	/* flex-shrink: 1; */
	/* align-self: flex-end; */
	background-color: #f3e5f5;
	margin: 0.15em;
	border: 0.05em;
	padding: 0.15em;
	padding-left: 0.3em;
	padding-right: 0.3em;
	border-style: solid;
	border-color: ;
	display: flex;
	flex-direction: column;
	animation: ${fadein} 0.5s;
`;

const MessageText = styled.div`
	word-wrap: word-brake;
	margin: 0.1em;
`;

const MessageDate = styled.div`
	text-align: right;
	color: grey;
	font-size: 0.75em;
`;

const MessageName = styled.div`
	align-self: flex-start;
	display: none;
	color: grey;
	font-size: 0.75em;
`;

function MessageEntry({ name, text, timestamp }) {
	return (
		<MessageOuterBox>
			<WidthHolder>
				<MessageOuterBox>
					<MessageBox>
						<MessageName> {name} </MessageName>
						<MessageText> {text} </MessageText>
						<MessageDate> {timestamp} </MessageDate>
					</MessageBox>
				</MessageOuterBox>
			</WidthHolder>
		</MessageOuterBox>
	);
}

MessageEntry.propTypes = {
	name: PropTypes.string.isRequired,
	text: PropTypes.string.isRequired,
	timestamp: PropTypes.string.isRequired,
};

export default MessageEntry;
