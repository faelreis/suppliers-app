import axios from "axios";

const apiClient = axios.create({
	baseURL: "http://localhost:3333",
	headers: {
		"Content-Type": "application/json; charset=utf-8",
	},
});

export default apiClient;
