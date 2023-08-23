import {TasksStateType} from "../AppWithRedux";
import {v1} from "uuid";
import {AddTodolistActionType, RemoveTodolistActionType, todolistId1, todolistId2} from "./todolists-reducer";

export type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export type AddTaskACACType = ReturnType<typeof addTaskAC>
export type ChangeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export type ChangeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>


type ActionsType =
	RemoveTaskACType
	| AddTaskACACType
	| ChangeTaskStatusACType
	| ChangeTaskTitleACType
	| AddTodolistActionType
	| RemoveTodolistActionType

const initialState: TasksStateType = {
	[todolistId1]: [
		{id: v1(), title: "HTML&CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true}
	],
	[todolistId2]: [
		{id: v1(), title: "Milk", isDone: true},
		{id: v1(), title: "React Book", isDone: true}
	]
}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
	switch (action.type) {
		case 'REMOVE-TASK':
			return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
		case 'ADD-TASK':
			let task = {id: v1(), title: action.title, isDone: false};
			return {...state, [action.todolistId]: [task, ...state[action.todolistId]]}
		case 'CHANGE-TASK-STATUS':
			return {...state,
				[action.todolistId]: state[action.todolistId].map(t => t.id === action.id ? {
					...t,
					isDone: action.isDone
				} : t)
			}
		case 'CHANGE-TASK-TITLE':
			return {...state,
				[action.todolistId]: state[action.todolistId].map(t => t.id === action.id ? {
					...t,
					title: action.title
				} : t)
			}
		case 'ADD-TODOLIST':
			return {...state, [action.todolistId]: []}
		case 'REMOVE-TODOLIST':
			let stateCopy = {...state}
			delete stateCopy[action.id]
			return stateCopy
		default:
			return state;
	}
}

export const removeTaskAC = (taskId: string, todolistId: string) => {
	return {type: 'REMOVE-TASK', todolistId, taskId} as const
}
export const addTaskAC = (title: string, todolistId: string) => {
	return {type: 'ADD-TASK', title, todolistId} as const
}
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
	return {type: 'CHANGE-TASK-STATUS', id, isDone, todolistId} as const
}
export const changeTaskTitleAC = (id: string, todolistId: string, title: string) => {
	return {type: 'CHANGE-TASK-TITLE', id, todolistId, title} as const
}
