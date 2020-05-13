import { combineReducers } from 'redux';
import counter from './counter';
import appData from './appData';
import profileInfo from './profileInfo';
import appState from './appState';

const rootReducer = combineReducers({
	counter,
	appData: appData,
	profileInfo: profileInfo,
	appState: appState,
});

export default rootReducer;
