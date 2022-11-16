import axios from 'axios';
import {apiClient} from './apiClient';

export const backend = {
	async getList() {
		return (await apiClient.get(`/getList`))?.data;
	},
	async dataAdd(title, text) {
		const data = {
			name: title,
			description: text,
		};
		return (await apiClient.post('/insert', data))?.data;
	},
	async delete(id) {
		data = {
			id: id,
		};
		return (await apiClient.post('/delete', data))?.data;
	},
	async getNameList() {
		return (await apiClient.get(`/getNameList`))?.data;
	},
	async insertName(name) {
		const data = {
			name: name,
		};
		return (await apiClient.post('/insertName', data))?.data;
	},
};
