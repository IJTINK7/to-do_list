import axios from 'axios'

const settings = {
	baseURL: "https://social-network.samuraijs.com/api/1.1",
	withCredentials: true,
	header: {
		"API-KEY": "ce6bdb2d-53b5-4b5f-9621-9590c51cbce5"
	}
}
export const todolistAPI = {
	getTodolists() {
		return axios.get("/todo-lists",settings)
	},
	createTodolist(title: string) {
		return axios.post("/todo-lists",{title: title},settings)
	},
	updateTodolist(todolistId: string, title: string) {
		return axios.put(`/todo-lists/${todolistId}`,{title: title},settings)
	},
	deleteTodolist(todolistId: string) {
		return axios.delete(`/todo-lists/${todolistId}`,settings)
	},
}
