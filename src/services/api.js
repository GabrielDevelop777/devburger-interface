import axios from "axios";

export const api = axios.create({
	baseURL: "http://localhost:3000",
});

api.interceptors.request.use((config) => {
	const userData = localStorage.getItem("devburguer:userData");

	const token = userData && JSON.parse(userData).token;

	config.headers.authorization = `Bearer ${token}`;

	return config;
});
