import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import MessageEntry from './MessageEntry';

const ScrollBody = styled.div`
	display: block;
	overflow-y: scroll;
	overflow-x: hidden;
	flex-basis: 10px;
	flex-grow: 1;
`;

class MessageList extends React.Component {
	constructor(props) {
		super(props);
		this.refBottom = React.createRef();
	}

	componentDidMount() {
		this.scrollDown();
	}

	componentDidUpdate() {
		this.scrollDown();
	}

	scrollDown() {
		this.refBottom.current.scrollIntoView();
	}

	renderMessages() {
		const { messages, profileInfo } = this.props;
		const result = [];

		if (messages !== undefined) {
			for (let i = 0; i < messages.length; i += 1) {
				const message = messages[i];
				result.push(
					React.createElement(MessageEntry, {
						key: i.toString(),
						username: message.username,
						text: message.text,
						timestamp: message.created.slice(0, 8),
						isFromUser: profileInfo.id === message.user,
					}),
				);
			}
		}
		return result;
	}

	render() {
		return (
			<ScrollBody>
				{this.renderMessages()}
				<div ref={this.refBottom} />
			</ScrollBody>
		);
	}
}

MessageList.propTypes = {
	messages: PropTypes.arrayOf(
		PropTypes.shape({
			user: PropTypes.number.isRequired,
			username: PropTypes.string.isRequired,
			text: PropTypes.string.isRequired,
			created: PropTypes.string.isRequired,
		}),
	).isRequired,
	profileInfo: PropTypes.objectOf(
		PropTypes.shape({
			id: PropTypes.number,
		}),
	).isRequired,
};

export default MessageList;
