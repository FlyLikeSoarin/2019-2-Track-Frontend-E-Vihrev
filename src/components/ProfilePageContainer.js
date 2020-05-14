import { connect } from 'react-redux';
import ProfilePage from './ProfilePage';
import { fetchProfileDetails } from '../actions/profileInfo.js';
import { history } from '../routes/history';

const mapStateToProps = (state) => {
	if (state.profileInfo.auth.token === undefined) {
		history.push('/login');
	}

	return {
		profile: state.profileInfo,
	};
};

const mapDispatchToProps = (dispatch) => {
	dispatch(fetchProfileDetails());

	return {};
};

const ProfilePageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(ProfilePage);

export default ProfilePageContainer;
