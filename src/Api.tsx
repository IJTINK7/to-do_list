import React, {useEffect, useState} from 'react';
import {todolistApi} from "./api/todolists-api";


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
		todolistApi.getTodolists()
			.then((res)=>{
				setState(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		todolistApi.createTodolist("Todolist")
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
		todolistApi.updateTodolist(todolistId,"My new todolist")
			.then((res)=>{
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "4a3dd011-08b5-43e4-bcc2-798b1c51dfe1"
		todolistApi.deleteTodolist(todolistId)
			.then((res)=>{
				setState(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}

