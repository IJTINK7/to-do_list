import axios from 'axios'

export type TodolistType ={
	id: string
	title: string
	addedDate: string
	order: number
}
export type CreateTodolistResponseType = {
	resultCode: number
	messages: string[]
	data: {
		item: TodolistType
	}
}
export type UpdateTodolistResponseType = {
	resultCode: number
	messages: string[]
	data: {}
}
export type DeleteTodolistResponseType = {
	resultCode: number
	messages: string[]
	data: {}
}

const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.1",
	withCredentials: true,
	headers: {
		"API-KEY": "ce6bdb2d-53b5-4b5f-9621-9590c51cbce5"
	}
})
export const todolistAPI = {
	getTodolists() {
		return instance.get<TodolistType[]>("/todo-lists")
	},
	createTodolist(title: string) {
		return instance.post<CreateTodolistResponseType>("/todo-lists",{title: title})
	},
	updateTodolist(todolistId: string, title: string) {
		return instance.put<UpdateTodolistResponseType>(`/todo-lists/${todolistId}`,{title: title})
	},
	deleteTodolist(todolistId: string) {
		return instance.delete<DeleteTodolistResponseType>(`/todo-lists/${todolistId}`)
	},
}
