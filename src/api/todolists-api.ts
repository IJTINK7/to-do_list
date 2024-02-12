import axios from 'axios'

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.1",
	withCredentials: true,
	headers: {
		"API-KEY": "ce6bdb2d-53b5-4b5f-9621-9590c51cbce5"
	}
})
export const todolistAPI = {
	getTodolists() {
		return instance.get("/todo-lists")
	},
	createTodolist(title: string) {
		return instance.post("/todo-lists",{title: title})
	},
	updateTodolist(todolistId: string, title: string) {
		return instance.put(`/todo-lists/${todolistId}`,{title: title})
	},
	deleteTodolist(todolistId: string) {
		return instance.delete(`/todo-lists/${todolistId}`)
	},
}
