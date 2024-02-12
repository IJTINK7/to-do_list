import axios from 'axios'

export type TodolistType ={
	id: string
	title: string
	addedDate: string
	order: number
}
export type CreateTodolistDataResponseType = {
	data: {
		item: TodolistType
	}
}
export type UpdateTodolistDataResponseType = {
	data: {
		title: string
	}
}
export type DeleteTodolistDataResponseType = {
	data: {}
}
export type ResponseType<D> = {
	resultCode: number
	messages: string[]
	fieldsErrors: string[]
	data: D
}
const instance = axios.create({
	baseURL: "https://social-network.samuraijs.com/api/1.1",
	withCredentials: true,
	headers: {
		"API-KEY": "ce6bdb2d-53b5-4b5f-9621-9590c51cbce5"
	}
})
export const todolistApi = {
	getTodolists() {
		return instance.get<TodolistType[]>("/todo-lists")
	},
	createTodolist(title: string) {
		return instance.post<ResponseType<CreateTodolistDataResponseType>>("/todo-lists",{title: title})
	},
	updateTodolist(todolistId: string, title: string) {
		return instance.put<ResponseType<UpdateTodolistDataResponseType>>(`/todo-lists/${todolistId}`,{title: title})
	},
	deleteTodolist(todolistId: string) {
		return instance.delete<ResponseType<DeleteTodolistDataResponseType>>(`/todo-lists/${todolistId}`)
	},
}
