import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import { authenticateWithUsernamePassword } from '../actions/profileInfo.js';
import { history } from '../routes/history';

const mapStateToProps = (state) => {
	if (state.profileInfo.auth.token !== undefined) {
		history.push('/');
	}
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	onLogin: (e, formRef) => {
		e.preventDefault();

		const username = formRef.current[0].value;
		const password = formRef.current[1].value;

		dispatch(authenticateWithUsernamePassword(username, password));
	},
});

const LoginPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginPage);

export default LoginPageContainer;
