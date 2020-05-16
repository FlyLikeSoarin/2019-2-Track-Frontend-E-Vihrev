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
			for (const key in action.chatMessages) {
				if ({}.hasOwnProperty.call(state.chatMessages, key)) {
					if (
						action.chatMessages[key].length !== state.chatMessages[key].length
					) {
						const newChatMessages = {
							...state.chatMessages,
							...action.chatMessages,
						};
						return { ...state, chatMessages: newChatMessages };
					}
				} else {
					const newChatMessages = {
						...state.chatMessages,
						...action.chatMessages,
					};
					return { ...state, chatMessages: newChatMessages };
				}
			}
			return state;
		}

		default:
			return state;
	}
}
