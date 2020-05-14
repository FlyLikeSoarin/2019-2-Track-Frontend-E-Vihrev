import { connect } from 'react-redux';
import HeaderMenu from './HeaderMenu';
import { invalidateAccount } from '../actions/profileInfo';
import { invalidateAppData } from '../actions/appData';
import { history } from '../routes/history';

const mapStateToProps = (state, ownProps) => {
	if (state.profileInfo.auth.token === undefined) {
		history.push('/login');
	}

	return ownProps;
};

const mapDispatchToProps = (dispatch) => {
	return {
		logout: () => {
			dispatch(invalidateAccount());
			dispatch(invalidateAppData());
		},
	};
};

const HeaderMenuContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(HeaderMenu);

export default HeaderMenuContainer;
