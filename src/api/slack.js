import axios from 'axios';
import { API_URL } from './url';
import _ from 'lodash';
export const getUserMessages = async (headers, id) => {
	let data = [];
	try {
		const res = await axios.get(
			`${API_URL}/messages?receiver_id=${id}&receiver_class=User`,
			{
				headers: {
					...headers,
				},
			}
		);

		data = res.data.data;
	} catch (error) {
		console.error(error);
	}
	return data;
};

export const getChannelMessages = async (headers, id) => {
	let data = [];
	try {
		const res = await axios.get(
			`${API_URL}/messages?receiver_id=${id}&receiver_class=Channel`,
			{
				headers: {
					...headers,
				},
			}
		);
		data = res.data.data;
		console.log(res);
	} catch (error) {
		console.error(error.response);
	}

	return data;
};

export const getUser = async (users, id) => {
	let user = users.find((user) => user.id === parseInt(id));
	return user;
};
export const getChannelDetail = async (headers, id) => {
	let data = {};
	try {
		const res = await axios.get(`${API_URL}/channels/${id}`, {
			headers: {
				...headers,
			},
		});

		data = res.data.data;
		console.log(res);
	} catch (error) {
		console.error(error.response);
	}

	return data;
};

export const addMemberChannel = async (headers, channelId, memberId) => {
	let status;
	try {
		const res = await axios.post(
			`${API_URL}/channel/add_member`,
			{
				id: channelId,
				member_id: memberId,
			},
			{
				headers: {
					...headers,
				},
			}
		);

		status = res.status;
	} catch (error) {
		console.error(error.response);
	}

	return status;
};

export const getUsers = async (headers) => {
	let users = [];
	try {
		const res = await axios.get(`${API_URL}/users`, {
			headers: {
				...headers,
			},
		});
		users = res.data.data;
	} catch (e) {
		console.log(e.response);
	}

	return users;
};

export const getChannels = async (headers) => {
	let data = [];
	try {
		const res = await axios.get(`${API_URL}/channels`, {
			headers: {
				...headers,
			},
		});

		data = res.data.data;
		// console.log(res);
	} catch (error) {
		console.error(error.response);
	}

	return data;
};

export const createChannel = async (users, channelName, headers) => {
	let data = [];
	let errors = [];
	try {
		const res = await axios.post(
			`${API_URL}/channels`,
			{
				name: channelName,
				user_ids: users.map((user) => user.id),
			},
			{
				headers: {
					...headers,
				},
			}
		);

		data = res.data.data;
		if (res.data.hasOwnProperty('errors')) {
			errors = res.data.errors;
		}
		// if()
		// errors = res.data.errors;
	} catch (error) {
		console.error(error.response);
	}

	return [data, errors];
};

export const sendMessage = async (headers, id, receiverClass, body) => {
	try {
		const res = await axios.post(
			`${API_URL}/messages`,
			{
				receiver_id: id,
				receiver_class: receiverClass, // 'Channel' 'User
				body: body,
			},
			{
				headers: {
					...headers,
				},
			}
		);
		console.log(res);
	} catch (error) {
		console.error(error.response);
	}
};

export const fetcher = (url, headers) =>
	axios
		.get(url, {
			headers: {
				...headers,
			},
		})
		.then((res) => {
			console.log(res.data.data);
			return res.data.data;
		});
