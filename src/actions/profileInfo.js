import fetch from 'cross-fetch';
import ActionTypes from '../constants/ActionTypes';
import ApiUrl from '../constants/ApiUrl';
import store from '../store';

export function fetchProfileDetails() {
	return (dispatch) => {
		fetch(`${ApiUrl}api/user/my_profile/`, {
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

export function authenticateWithUsernamePassword(username, password, alert) {
	return (dispatch) => {
		fetch(`${ApiUrl}api/acquire-auth-token/`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then(
				(response) => {
					if (response.ok) {
						return response.json();
					}
					alert.show('Incorrect username-password pair');
					throw Error('Incorrect username-password pair');
				},
				(error) => {
					alert.show('Network error');
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

export function postUser(username, password, alert) {
	return (dispatch) => {
		fetch(`${ApiUrl}api/user/create_user/`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username,
				password,
			}),
		})
			.then(
				(response) => {
					if (response.ok) {
						return response.json();
					}
					switch (response.status) {
						case 400:
							alert.show('Bad request');
							break;
						case 409:
							alert.show('User already exists');
							break;
						default:
							break;
					}

					throw Error('Bad request');
				},
				(error) => {
					alert.show('Network error');
					throw Error('Network error!');
				},
			)
			.then((json) => {
				dispatch(authenticateWithUsernamePassword(username, password, alert));
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
