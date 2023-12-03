import {FilterValuesType, TodolistsType} from "../AppWithRedux";
import {v1} from "uuid";

export let todolistID1 = v1()
export let todolistID2 = v1()
export let newTodolistID = v1()


let initialState: TodolistsType[] = [
	{id: todolistID1, title: 'What to learn', filter: 'all'},
	{id: todolistID2, title: 'What to buy', filter: 'all'},
]

export const todolistReducer = (state: TodolistsType[] = initialState, action: MainType): TodolistsType[]=>{
	switch (action.type) {
		case "REMOVE-TODOLIST" :
			return state.filter(el => el.id !== action.payload.todolistId)
		case "CHANGE-FILTER" :
			return state.map(el=> el.id === action.payload.todolistId ? {...el, filter: action.payload.filterValue}: el)
		case "ADD-TODOLIST":
			const newTodolist: TodolistsType = {id: newTodolistID, title: action.payload.newTodolistTitle, filter: 'all'}
			return [newTodolist, ...state]
		default: return state
	}
}

export type MainType = RemoveTodolistACType | ChangeFilterACType | AddNewTodolistACType

export type RemoveTodolistACType = ReturnType<typeof removeTodolistAC>
export type ChangeFilterACType = ReturnType<typeof changeFilterAC>
export type AddNewTodolistACType = ReturnType<typeof addTodolistAC>

export const removeTodolistAC = (todolistId: string) => {
	return {
		type: "REMOVE-TODOLIST",
		payload:{todolistId}
	} as const
}
export const changeFilterAC = (todolistId: string, filterValue: FilterValuesType) => {
	return {
		type: "CHANGE-FILTER",
		payload:{todolistId,filterValue}
	} as const
}
export const addTodolistAC = (newTodolistTitle: string) => {
	debugger
	return {
		type: "ADD-TODOLIST",
		payload:{newTodolistTitle}
	} as const
}