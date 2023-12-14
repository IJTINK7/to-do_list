import {TasksType} from "../AppWithRedux";
import {v1} from "uuid";
import {addTodolistAC, newTodolistID, todolistID1, todolistID2} from "./todolists-reducer";

let initialState: TasksType = {
	[todolistID1]: [
		{id: v1(), title: 'HTML&CSS', isDone: true},
		{id: v1(), title: 'JS', isDone: true},
		{id: v1(), title: 'ReactJS', isDone: false},

	],
	[todolistID2]: [
		{id: v1(), title: 'Rest API', isDone: true},
		{id: v1(), title: 'GraphQL', isDone: false},
	]
}
export const tasksReducer = (state: TasksType = initialState, action: MainType): TasksType=>{
	switch (action.type) {
		case "REMOVE-TASK" :
			return {...state, [action.payload.todolistId]: state[action.payload.todolistId].filter(el=> el.id !== action.payload.taskId)}
		case "CHANGE-TASK-STATUS" :
			return {...state, [action.payload.todolistId]: state[action.payload.todolistId].map(el=> el.id === action.payload.taskId ? {...el, isDone: action.payload.isDone}: el )}
		case "ADD-TASK":
			let newTask = { id: v1(), title: action.payload.taskTitle, isDone: false }
			return {...state, [action.payload.todolistId]: [newTask, ...state[action.payload.todolistId]]}
		case "ADD-TODOLIST":
			return {...state, [newTodolistID]: []}
		case "REMOVE-TODOLIST":
			let stateCopy = {...state}
			delete stateCopy[action.payload.todolistId]
			return stateCopy
		default: return state
	}
}

export type MainType = RemoveTaskACType | ChangeTaskStatusACType |AddTaskACType | AddNewTodolistACType | RemoveTodolistACType

export type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export type ChangeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export type AddTaskACType = ReturnType<typeof addTaskAC>
export type AddNewTodolistACType = ReturnType<typeof addTodolistAC>
export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>

export const removeTaskAC = (todolistId: string, taskId: string) => {
	return {
		type: "REMOVE-TASK",
		payload:{todolistId, taskId}
	} as const
}
export const changeTaskStatusAC = (todolistId: string, taskId: string, isDone: boolean) => {
	return {
		type: "CHANGE-TASK-STATUS",
		payload:{todolistId,taskId,isDone}
	} as const
}
export const addTaskAC = (todolistId: string, taskTitle: string) => {
	return {
		type: "ADD-TASK",
		payload:{todolistId,taskTitle}
	} as const
}
export const removeTodolistAC = (todolistId: string) => {
	return {
		type: "REMOVE-TODOLIST",
		payload:{todolistId}
	} as const
}