import ActionTypes from '../constants/ActionTypes';

const initialState = {
	chats: {},
	chatMessages: {},
};

export default function appData(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_CHATS: {
			const newChats = { ...state.chats, ...action.chats };
			return { ...state, chats: newChats };
		}

		case ActionTypes.UPDATE_MESSAGES: {
			const newChatMessages = { ...state.chatMessages, ...action.chatMessages };
			return { ...state, chatMessages: newChatMessages };
		}

		default:
			return state;
	}
}
