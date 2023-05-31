import {TaskType} from "../Todolist";
export const tasksReducer = (state: TaskType[], action:GeneralType) => {
	switch (action.type) {
		case "REMOVE-TASK":{
			return state.filter(el => el.id !== action.payload.id)
		}
		case "ADD-TASK":{
			return state
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

export const addTaskAC = () => {
	return {
		type: "ADD-TASK"
	} as const
}