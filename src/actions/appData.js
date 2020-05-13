import fetch from 'cross-fetch';
import ActionTypes from '../constants/ActionTypes';

import store from '../store';

export function fetchChats() {
	return (dispatch) => {
		fetch('http://127.0.0.1:8000/api/chat/list_chats/', {
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
					type: ActionTypes.UPDATE_CHATS,
					chats: json.chats,
				});
			})
			.catch((e) => e);
	};
}

export function postChat(chatLabel) {
	return (dispatch) => {
		fetch('http://127.0.0.1:8000/api/chat/create_chat/', {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Token ${store.getState().profileInfo.auth.token}`,
			},
			body: JSON.stringify({
				chat_label: chatLabel,
			}),
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
					type: ActionTypes.UPDATE_CHATS,
					chats: json.chats,
				});
			})
			.catch((e) => e);
	};
}

export function joinChat(chat) {
	return (dispatch) => {
		fetch(`http://127.0.0.1:8000/api/chat/${chat}/join_chat/`, {
			method: 'POST',
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
					if (response.status === 404) {
						// alert('Chat with this id doesn\'t exists');
					}
					throw Error('Bad request!');
				},
				(error) => {
					throw Error('Network error!');
				},
			)
			.then((json) => {
				dispatch({
					type: ActionTypes.UPDATE_CHATS,
					chats: json.chats,
				});
			})
			.catch((e) => e);
	};
}

export function fetchMessages(chat) {
	return (dispatch) => {
		fetch(`http://127.0.0.1:8000/api/chat/${chat}/list_messages/`, {
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
					type: ActionTypes.UPDATE_MESSAGES,
					chatMessages: json.chatMessages,
				});
			})
			.catch((e) => e);
	};
}

export function postMessage(chat, text) {
	return (dispatch) => {
		fetch(`http://127.0.0.1:8000/api/chat/${chat}/send_message/`, {
			method: 'POST',
			headers: {
				Accept: 'application/json',
				'Content-Type': 'application/json',
				Authorization: `Token ${store.getState().profileInfo.auth.token}`,
			},
			body: JSON.stringify({
				text,
			}),
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
				dispatch(fetchMessages(chat));
			})
			.catch((e) => e);
	};
}

export function invalidateAppData() {
	return {
		type: ActionTypes.INVALIDATE_APP_DATA,
	};
}
