import React, {useEffect, useState} from 'react';
import {todolistAPI} from "./api/todolists-api";


export const Api = () => {
	return (
		<div>
			<GetTodolists/>
			<CreateTodolist/>
			<UpdateTodolistTitle/>
			<DeleteTodolist/>
		</div>
	);
};
export const GetTodolists = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		todolistAPI.getTodolists()
			.then((res)=>{
				setState(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		todolistAPI.createTodolist("New Todolist")
			.then((res)=>{
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "5cb9cb26-3bcb-49c2-ac5e-8c072965f516"
		todolistAPI.updateTodolist(todolistId,"My new todolist")
			.then((res)=>{
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "3c1d8f40-c8f0-4d4b-8ffc-7d7b5950ab11"
		todolistAPI.deleteTodolist(todolistId)
			.then((res)=>{
				setState(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}

