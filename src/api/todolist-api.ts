import axios from "axios";

type TodolistType = {
	addedDate: Date
	id: string
	order: number
	title: string
}
type ResponseType<T = {}> = {
	data: T
	fieldsErrors:[]
	messages: []
	resultCode: number
}

const instance = axios.create({baseURL: "https://social-network.samuraijs.com/api/1.1/", withCredentials: true})
export const todolistApi = {
	getTodolists(){
		return instance.get<TodolistType[]>("todo-lists")
	},
	createTodolist(title: string){
				return  instance.post<ResponseType<{item: TodolistType}>>("todo-lists", {title})
	},
	deleteTodolist(todoId: string){
		return instance.delete<ResponseType>(`todo-lists/${todoId}`)
	},
	updateTodolistTitle(todoId:string, title: string){
		return instance.put<ResponseType>("todo-lists",{title})
	}
}
