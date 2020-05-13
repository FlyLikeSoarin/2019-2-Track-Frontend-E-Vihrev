import { connect } from 'react-redux';
import ChatList from './ChatList';
import { fetchChats, postChat } from '../actions/appData.js';
import { history } from '../routes';

const mapStateToProps = (state, ownProps) => {
	if (state.profileInfo.auth.token === undefined) {
		history.push('/login');
	}

	return {
		chats: state.appData.chats,
	};
};

const mapDispatchToProps = (dispatch, ownProps) => {
	dispatch(fetchChats());

	return {
		createChat: (chatLabel) => {
			dispatch(postChat(chatLabel));
		},
	};
};

const ChatListContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ChatList);

export default ChatListContainer;
