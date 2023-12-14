import React, {useEffect, useState} from 'react'
import {todolistApi} from "../api/todolist-api";

export default {
	title: 'API'
}

export const GetTodolists = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		// здесь мы будем делать запрос и ответ закидывать в стейт.
		// который в виде строки будем отображать в div-ке
		const promise = todolistApi.getTodolists()
		promise.then((res)=>{
			console.log(res)
			setState(res.data)
		})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const promise = todolistApi.createTodolist("React")
		promise.then((res)=>{
			setState(res.data)
		})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const todoId = "f1dfcc07-d426-4c29-b3a1-c613fd41acff"
		const promise = todolistApi.deleteTodolist(todoId)
		promise.then((res)=>{
			setState(res.data)
		})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		const todoId = "c0a2b870-dfa1-4872-8d0f-de549b123bd7"
		const promise = todolistApi.updateTodolistTitle(todoId, "Redux")
		promise.then((res)=>{
			setState(res.data)
		})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}