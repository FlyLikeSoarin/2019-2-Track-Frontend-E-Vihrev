import fetch from 'cross-fetch';
import ActionTypes from '../constants/ActionTypes';
import store from '../store';

export function fetchProfileDetails() {
	return (dispatch) => {
		fetch('http://127.0.0.1:8000/api/user/my_profile/', {
			method: 'GET',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Token ${store.getState().profileInfo.auth.token}`,
			},
		})
			.then(
				(response) => {
					if (response.ok) {
						return response.json();
					}
					throw Error('Bad request!');
				},
				(error) => {
					throw Error('Network error!');
				},
			)
			.then((json) => {
				dispatch({
					type: ActionTypes.UPDATE_PROFILE,
					profileInfo: json,
				});
			})
			.catch((e) => e);
	};
}

export function authenticateWithFakeAccount() {
	return {
		type: ActionTypes.UPDATE_PROFILE,
		progileInfo: {
			id: '1',
			displayedName: 'FlyLikeSoarin',
			userIcon: undefined,
			information: {
				'Phone number': '+7-985-290-2394',
				Location: 'Moscow, Russia',
				Birthday: '22.01.1999',
			},
			auth: {
				token: undefined,
			},
		},
	};
}

export function authenticateWithUsernamePassword(username, password) {
	return (dispatch) => {
		fetch('http://127.0.0.1:8000/api/acquire-auth-token/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: username,
				password: password,
			}),
		})
			.then(
				(response) => {
					if (response.ok) {
						return response.json();
					}
					throw Error('Incorrect username-password pair');
				},
				(error) => {
					throw Error('Network error!');
				},
			)
			.then((json) => {
				dispatch({
					type: ActionTypes.UPDATE_PROFILE,
					profileInfo: {
						auth: json,
					},
				});
				dispatch(fetchProfileDetails());
			})
			.catch(
				(e) => e, // alert(e)
			);
	};
}

export function invalidateAccount() {
	return {
		type: ActionTypes.INVALIDATE_PROFILE,
	};
}
