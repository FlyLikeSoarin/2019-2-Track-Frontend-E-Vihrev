import React from 'react';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';
import '../styles/globalStyles.css';
import { useAlert } from 'react-alert';

const CenteredContainer = styled.div`
	height: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #333;
`;

const FormContainer = styled.div`
	height: 270px;
	width: 500px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #8e24aa;
	border-radius: 15px;
`;

const Title = styled.div`
	font-weight: bold;
	color: white;
	font-size: 40px;
	margin-bottom: 20px;
`;

const InputContainer = styled.div`
	display: flex;
	flex-direction: row;
	margin-bottom: 7px;
	width: 450px;
`;

const InputLabel = styled.label`
	font-size: 25px;
	font-weight: bold;
	color: white;
	background-color: #461252;

	border-bottom-left-radius: 10px;
	border-top-left-radius: 10px;

	width: 175px;
	padding-right: 10px;
	padding-left: 10px;
	padding-bottom: 3px;
`;

const InputField = styled.input`
	border: 0;
	outline: none;
	width: 275px;

	padding-left: 7px;

	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;

	font-size: 20px;
	font-weight: bold;
	color: #461252;

	:host {
		display: inline-block;
		border: 1px solid rgba(25, 25, 25, 0.32);
	}
`;

const LoginButton = styled.input`
	border: 0;
	outline: none;

	width: 250px;

	font-size: 23px;
	font-weight: bold;
	background-color: #461252;
	color: white;

	border-bottom-left-radius: 10px;
	border-top-left-radius: 10px;

	transition: 0.3s;

	:hover {
		background-color: white;
		color: #461252;
	}
`;

const RegisterButton = styled.input`
	border: 0;
	outline: none;

	width: 250px;

	font-size: 23px;
	font-weight: bold;
	background-color: #461252;
	color: white;

	border-bottom-right-radius: 10px;
	border-top-right-radius: 10px;

	transition: 0.3s;

	:hover {
		background-color: white;
		color: #461252;
	}
`;

const BlankBottom = styled.div`
	height: 5%;
`;

function LoginPage(props) {
	const { onLogin } = props;
	const formRef = React.createRef();
	const alert = useAlert();

	return (
		<CenteredContainer>
			<FormContainer>
				<Title>Messenger</Title>
				<form ref={formRef} onSubmit={(e) => onLogin(e, formRef, alert)}>
					<InputContainer>
						<InputLabel>Username</InputLabel>
						<InputField type="text" name="username" id="username" />
					</InputContainer>

					<InputContainer>
						<InputLabel>Password</InputLabel>
						<InputField type="password" name="password" id="password" />
					</InputContainer>

					<InputContainer>
						<LoginButton
							type="submit"
							id="login-username"
							name="login-username"
							value="Login"
							onClick={() => {
								formRef.current.action = 'Login';
							}}
						/>
						<RegisterButton
							type="submit"
							id="register-username"
							name="register-username"
							value="Register"
							onClick={() => {
								formRef.current.action = 'Register';
							}}
						/>
					</InputContainer>
				</form>
			</FormContainer>
			{/* <AppleButtonHolder id="appleid-signin" data-color="white" data-border="false" data-type="sign in" /> */}
			<BlankBottom />
		</CenteredContainer>
	);
}

LoginPage.propTypes = {
	onLogin: PropTypes.func.isRequired,
};

export default LoginPage;
