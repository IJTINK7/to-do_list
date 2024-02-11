import axios from "axios";

const instance = axios.create({
	baseURL: 'https://social-network.samuraijs.com/api/1.1/',
	withCredentials: true,
	headers: {
		'API-KEY': 'ce6bdb2d-53b5-4b5f-9621-9590c51cbce5',
	},
})

export type TodolistType = {
	id: string
	title: string
	addedDate: string
	order: number
}
export type TaskType = {
	id: string
	title: string
	isDone: boolean
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

export type ResponseTodolistType<D> = {
	resultCode: number
	messages: string[]
	fieldsErrors: string[]
	data: D
}

export type ResponseTaskType = {
	resultCode: number
	messages: string[]
	data: {}
}



export const  todolistsApi = {
	getTodolists(){
		return instance.get<TodolistType[]>(`/todo-lists`)
	},
	createTodolist(title: string){
		return instance.post<ResponseTodolistType<CreateTodolistDataResponseType>>(`/todo-lists`,{title: title})
	},
	updateTodolist(todolistId: string, title: string){
		return instance.put<ResponseTodolistType<UpdateTodolistDataResponseType>>(`/todo-lists/${todolistId}`,{title: title})
	},
	deleteTodolist(todolistId: string){
		return instance.delete<ResponseTodolistType<DeleteTodolistDataResponseType>>(`/todo-lists/${todolistId}`)
	}
}

export const tasksApi = {
	getTasks(todolistId: string){
		return instance.get<TaskType[]>(`/todo-lists/${todolistId}/tasks`)
	},
	createTask(todolistId: string, title: string){
		return instance.post<ResponseTaskType>(`/todo-lists/${todolistId}/tasks`,{title: title})
	},
	updateTask(todolistId: string,taskId: string, title: string){
		return instance.put<ResponseTaskType>(`/todo-lists/${todolistId}/tasks/${taskId}`,{title: title})
	},
	deleteTask(todolistId: string, taskId: string){
		return instance.delete<ResponseTaskType>(`/todo-lists/${todolistId}/tasks/${taskId}`)
	}

}