import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import { keyframes } from '@emotion/core';

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
	align-self: flex-end;
	animation: fadein 0.6s;
`;

const MessageBox = styled.div`
	position: relative;
	right: 0px;
	background-color: #f3e5f5;
	margin: 0.15em;
	border: 0.05em;
	padding: 0.15em;
	padding-left: 0.3em;
	padding-right: 0.3em;
	border-style: solid;
	border-color: ;
	border-radius: 0.2em;
	box-shadow: 0px 0px 2px 1px #888888;
	display: flex;
	flex-direction: column;
	animation: ${fadein} 0.5s;
`;

const MessageText = styled.div`
	word-wrap: word-brake;
	margin: 0.1em;
`;

const MessageImg = styled.img`
	display: block;
	/*for many reasons - but mainly to get rid of the little margin-bottom that happens by default */
	width: 100%;
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
	const type = text.substring(0, 5);
	const value = text.substring(5, text.length);
	let content;
	switch (type) {
		case '/aud_':
			content = (
				<audio preload="auto" controls="controls" src={value}>
					<track kind="captions" />
				</audio>
			);
			break;
		case '/img_':
			content = <MessageImg src={value} />;
			break;
		case '/pos_':
			content = (
				<MessageText>
					{' '}
					<a href={value}> Location </a>{' '}
				</MessageText>
			);
			break;
		default:
			content = <MessageText> {text} </MessageText>;
			break;
	}

	return (
		<MessageOuterBox>
			<WidthHolder>
				<MessageOuterBox>
					<MessageBox>
						<MessageName> {name} </MessageName>
						{content}
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
