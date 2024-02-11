import axios from "axios";

const settings = {
	withCredentials: true,
	headers:{
		"API-KEY": "ce6bdb2d-53b5-4b5f-9621-9590c51cbce5"
	}
}
export type TodolistType = {
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



export const  todolistsApi = {
	getTodolists(){
		return axios.get<TodolistType[]>("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
	},
	createTodolist(title: string){
		return axios.post<ResponseType<CreateTodolistDataResponseType>>("https://social-network.samuraijs.com/api/1.1/todo-lists",{title: title}, settings)
	},
	updateTodolist(todolistId: string, title: string){
		return axios.put<ResponseType<UpdateTodolistDataResponseType>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,{title: title}, settings)
	},
	deleteTodolist(todolistId: string){
		return axios.delete<ResponseType<DeleteTodolistDataResponseType>>(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
	}
}