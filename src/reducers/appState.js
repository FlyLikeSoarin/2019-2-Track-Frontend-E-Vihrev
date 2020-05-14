import ActionTypes from '../constants/ActionTypes';

const initialState = {
	headerText: 'Messenger',
	headerIcon: undefined,
	headerMode: 'menu',
	displayedPage: 'chat-list',
};

export default function appState(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_APP_STATE:
			return state;

		default:
			return state;
	}
}
