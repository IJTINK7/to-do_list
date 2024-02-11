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
		let todolistId = "616cc77a-6845-47f9-9270-281a68ff0dda"
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
		let todolistId = "7d9d21da-170e-46e6-ac45-f6ca11b0511a"
		todolistsApi.deleteTodolist(todolistId)
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}