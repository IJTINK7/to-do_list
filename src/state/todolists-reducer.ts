import {FilterValuesType, TodolistType} from "../App";
import {v1} from "uuid";

export const todolistsReducer = (state: TodolistType[], action: ActionsType): TodolistType[] => {
	switch (action.type) {
		case "REMOVE-TODOLIST":
			return state.filter(el => el.id !== action.payload.todolistId)
		case "ADD-TODOLIST":{
			const newTodolistID = v1();
			return [...state, {id: newTodolistID, title: action.payload.title, filter: 'all'}]
		}
		case "CHANGE-TODOLIST-TITLE":{
			return  state.map(el=> el.id === action.payload.id ? {...el, title: action.payload.title} : el)
		}
		case "CHANGE-TODOLIST-FILTER":{
			return state.map(el=>el.id === action.payload.id ? {...el, filter: action.payload.filter}: el)
		}
		default:
			return state
	}
}

type ActionsType = RemoveTodolistACType | AddTodolistACType | ChangeTodolistTitleACType | ChangeTodolistFilterACType
type RemoveTodolistACType = ReturnType<typeof RemoveTodolistAC>
type AddTodolistACType = ReturnType<typeof AddTodolistAC>
type ChangeTodolistTitleACType = ReturnType<typeof ChangeTodolistTitleAC>
type ChangeTodolistFilterACType = ReturnType<typeof ChangeTodolistFilterAC>
//  ReturnType Возвращает {type: 'REMOVE-TODOLIST',payload: {todolistId}} то есть то, что после return в самой функции

export const RemoveTodolistAC = (todolistId: string) => {
	return {
		type: 'REMOVE-TODOLIST',
		payload: {todolistId}
	} as const
}
export const AddTodolistAC = (newTodolistTitle: string) => {
	return {
		type: 'ADD-TODOLIST',
		payload: {title: newTodolistTitle}
	} as const
}

export const ChangeTodolistTitleAC = (id: string, title: string ) => {
	return {
		type: 'CHANGE-TODOLIST-TITLE',
		payload: {id,title}
	} as const
}

export const ChangeTodolistFilterAC = (id: string, filter: FilterValuesType) => {
	return {
		type: 'CHANGE-TODOLIST-FILTER',
		payload: {id,filter}
	} as const
}