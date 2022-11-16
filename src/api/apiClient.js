import axios from 'axios';

export const apiClient = axios.create({
	baseURL: 'https://it351-backend.herokuapp.com',
});
