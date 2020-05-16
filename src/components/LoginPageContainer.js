import { connect } from 'react-redux';
import LoginPage from './LoginPage';
import {
	authenticateWithUsernamePassword,
	postUser,
} from '../actions/profileInfo.js';
import { history } from '../routes/history';

const mapStateToProps = (state) => {
	if (state.profileInfo.auth.token !== undefined) {
		history.push('/');
	}
	return {};
};

const mapDispatchToProps = (dispatch) => ({
	onLogin: (e, formRef, alert) => {
		e.preventDefault();
		const username = formRef.current[0].value;
		const password = formRef.current[1].value;

		if (username === '' || password === '') {
			alert.show('Make sure every field is provided');
		} else if (formRef.current.action.includes('Login')) {
			dispatch(authenticateWithUsernamePassword(username, password, alert));
		} else if (formRef.current.action.includes('Register')) {
			dispatch(postUser(username, password, alert));
		}
	},
});

const LoginPageContainer = connect(
	mapStateToProps,
	mapDispatchToProps,
)(LoginPage);

export default LoginPageContainer;
