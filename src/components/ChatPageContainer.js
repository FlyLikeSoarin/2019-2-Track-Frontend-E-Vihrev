import { connect } from 'react-redux';
import ChatPage from './ChatPage';
import { postMessage, fetchMessages } from '../actions/appData.js';
import { history } from '../routes';

const mapStateToProps = (state) => {
	if (state.profileInfo.auth.token === undefined) {
		history.push('/login');
	}

	return {
		chats: state.appData.chats,
		chatMessages: state.appData.chatMessages,
		profileInfo: state.profileInfo,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	const matches = history.location.pathname.toString().match(/\/chat\/(.*)/);
	if (matches != null) {
		if (matches.length === 2) {
			dispatch(fetchMessages(matches[1]));
		}
	}

	return {
		sendMessage: (text, chatId) => {
			dispatch(postMessage(chatId, text));
		},
	};
};

const ChatPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ChatPage);

export default ChatPageContainer;
