import {TasksStateType} from "../App";
import {v1} from "uuid";

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
	switch (action.type) {
		case "ADD-NEW-TASK":
			return {[action.payload.newTodolistId]: [], ...state}
		case "ADD-TASK": {
			const newTask = {id: v1(), title: action.payload.title, isDone: false}
			return {...state, [action.payload.todolistID]: [newTask, ...state[action.payload.todolistID]]}
		}
		case "REMOVE-TASK":
			return {
				...state,
				[action.payload.todolistID]: state[action.payload.todolistID].filter(el => el.id !== action.payload.taskID)
			}
		case "CHANGE-TASK-STATUS":
			return {
				...state,
				[action.payload.todolistID]: state[action.payload.todolistID].map(el => el.id === action.payload.taskID ? {
					...el,
					isDone: action.payload.isDone
				} : el)
			}
		case "CHANGE-TASK-TITLE" :
			return {
				...state,
				[action.payload.todolistID]: state[action.payload.todolistID].map(el => el.id === action.payload.taskID ? {
					...el,
					title: action.payload.newTitle
				} : el)
			}
		default:
			return state
	}
}

type ActionsType = AddNewTasksAC | AddTaskAC | RemoveTaskAC | ChangeTaskStatusAC | ChangeTaskTitleAC
type AddNewTasksAC = ReturnType<typeof addNewTasksAC>
type AddTaskAC = ReturnType<typeof addTaskAC>
type RemoveTaskAC = ReturnType<typeof removeTaskAC>
type ChangeTaskStatusAC = ReturnType<typeof changeTaskStatusAC>
type ChangeTaskTitleAC = ReturnType<typeof changeTaskTitleAC>

export const addNewTasksAC = (newTodolistId: string) => {
	return {
		type: "ADD-NEW-TASK",
		payload: {newTodolistId}
	} as const
}

export const addTaskAC = (title: string, todolistID: string) => {
	return {
		type: "ADD-TASK",
		payload: {title, todolistID}
	} as const
}
export const removeTaskAC = (taskID: string, todolistID: string) => {
	return {
		type: "REMOVE-TASK",
		payload: {taskID, todolistID}
	} as const
}
export const changeTaskStatusAC = (taskID: string, isDone: boolean, todolistID: string) => {
	return {
		type: "CHANGE-TASK-STATUS",
		payload: {taskID, isDone, todolistID}
	} as const
}
export const changeTaskTitleAC = (taskID: string, newTitle: string, todolistID: string) => {
	return {
		type: "CHANGE-TASK-TITLE",
		payload: {taskID, newTitle, todolistID}
	} as const
}