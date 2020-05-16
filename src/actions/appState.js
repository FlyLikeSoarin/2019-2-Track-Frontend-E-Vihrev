import ActionTypes from '../constants/ActionTypes';

export function updateAppState(appState) {
	return {
		type: ActionTypes.UPDATE_APP_STATE,
		appState,
	};
}
