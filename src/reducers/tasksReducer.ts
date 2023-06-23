import {TaskType} from "../Todolist";
import {v1} from "uuid";
export const tasksReducer = (state: TaskType[], action:GeneralType) => {
	switch (action.type) {
		case "REMOVE-TASK":{
			return state.filter(el => el.id !== action.payload.id)
		}
		case "ADD-TASK":{
			let newTask = { id: v1(), title: action.payload.title, isDone: false };
			return [newTask, ...state];
		}
		default:
			return state
	}
}

type GeneralType = RemoveTaskACType | AddTaskACType;

type RemoveTaskACType = ReturnType<typeof removeTaskAC>

export const removeTaskAC = (id: string) => {
	return {
		type: "REMOVE-TASK",
		payload: {
			id
		}
	} as const
}
type AddTaskACType = ReturnType<typeof addTaskAC>

export const addTaskAC = (title: string) => {
	return {
		type: "ADD-TASK",
		payload:{
			title
		}
	} as const
}