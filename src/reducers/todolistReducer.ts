import {FilterValuesType, TodolistType} from "../App";

export const todolistReducer = (state: TodolistType[], action: ActionsType): TodolistType[] => {
	switch (action.type) {
		case "REMOVE-TODOLIST":
			return state.filter(el => el.id !== action.payload.todolistID)
		case "ADD-TODOLIST": {
			let newTodolist: TodolistType = {id: action.payload.newTodolistId,title: action.payload.title,filter: 'all'};
			return [newTodolist, ...state]
		}
		case "CHANGE-TODOLIST-TITLE": {
			return state.map(el => el.id === action.payload.todolistID ? {...el, title: action.payload.title} : el)
		}
		case "CHANGE-TODOLIST-FILTER": {
			return state.map(el => el.id === action.payload.todolistID ? {...el, filter: action.payload.value} : el)
		}
		default:
			return state
	}
}

type ActionsType = RemoveTodolistACType | AddTodolistACType | ChangeTodolistTitleACType | ChangeTodolistFilterACType

type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
type AddTodolistACType = ReturnType<typeof addTodolistAC>
type ChangeTodolistTitleACType = ReturnType<typeof changeTodolistTitleAC>
type ChangeTodolistFilterACType = ReturnType<typeof changeTodolistFilterAC>

export const removeTodolistAC = (todolistID: string) => {
	return {
		type: "REMOVE-TODOLIST",
		payload: {todolistID}
	} as const
}
export const addTodolistAC = (newTodolistId: string, title: string) => {
	return {
		type: "ADD-TODOLIST",
		payload: {newTodolistId, title}
	} as const
}
export const changeTodolistTitleAC = (todolistID: string, title: string) => {
	return {
		type: "CHANGE-TODOLIST-TITLE",
		payload: {todolistID, title}
	} as const
}

export const changeTodolistFilterAC = (todolistID: string, value: FilterValuesType) => {
	return {
		type: "CHANGE-TODOLIST-FILTER",
		payload: {todolistID, value}
	} as const
}