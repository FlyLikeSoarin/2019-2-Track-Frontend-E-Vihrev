import { connect } from 'react-redux';
import Header from './Header';
import { joinChat } from '../actions/appData';
import { history } from '../routes';

const mapStateToProps = (state, ownProps) => {
	if (state.profileInfo.auth.token === undefined) {
		history.push('/login');
	}

	return {
		chats: state.appData.chats,
		profileInfo: state.profileInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	return {
		joinChat: (chatId) => {
			dispatch(joinChat(chatId));
		},
	};
};

const HeaderContainer = connect(mapStateToProps, mapDispatchToProps)(Header);

export default HeaderContainer;
