import React, {useEffect, useState} from 'react';
import {todolistsApi} from "./api/todolists-api";

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
		todolistsApi.getTodolists()
			.then((res) => {
				setState(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}
//
export const CreateTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		todolistsApi.createTodolist("Created todolist")
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "53be6ce0-8554-4cc1-b025-8d808e291105"
		todolistsApi.updateTodolist(todolistId, "myNewTodolist")
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "c0a2b870-dfa1-4872-8d0f-de549b123bd7"
		todolistsApi.deleteTodolist(todolistId)
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}