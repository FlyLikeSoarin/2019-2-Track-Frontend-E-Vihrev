import ActionTypes from '../constants/ActionTypes';

const initialState = {
	information: {},
	auth: {
		token: undefined,
	},
};

export default function profileInfo(state = initialState, action) {
	switch (action.type) {
		case ActionTypes.UPDATE_PROFILE:
			return { ...state, ...action.profileInfo };

		case ActionTypes.INVALIDATE_PROFILE:
			return initialState;

		default:
			return state;
	}
}
