import React from 'react';
import PropTypes from 'prop-types';
import MessageEntry from './MessageEntry';
import styled from '@emotion/styled';

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
		// this.shadowRoot = this.attachShadow({ mode: 'open' });
		// this.shadowRoot.appendChild(template.content.cloneNode(true));
		//
		// this.storage = window.localStorage;
		// this.localCache = window.localStorage;
		// this.$scrollBody = this.shadowRoot.querySelector('.scroll-body');
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
		const result = [];
		for (let i = 0; i < this.props.messages.length; i += 1) {
			const message = this.props.messages[i];
			result.push(React.createElement(MessageEntry, {
				key: (i += 1).toString(),
				name: message.name,
				text: message.text,
				timestamp: message.timestamp,
			}));
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
	messages: PropTypes.arrayOf(PropTypes.shape({
		name: PropTypes.string.isRequired,
		text: PropTypes.string.isRequired,
		timestamp: PropTypes.string.isRequired,
	})).isRequired,
};

export default MessageList;
