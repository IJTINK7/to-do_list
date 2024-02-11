import React, {useEffect, useState} from 'react';
import {tasksApi, todolistsApi} from "./api/todolists-api";

export const Api = () => {
	return (
		<div>
			<GetTodolists/>
			<CreateTodolist/>
			<UpdateTodolistTitle/>
			<DeleteTodolist/>
			<GetTasks/>
			<CreateTask/>
			<UpdateTaskTitle/>
			<DeleteTask/>
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

export const GetTasks = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "616cc77a-6845-47f9-9270-281a68ff0dda"
		tasksApi.getTasks(todolistId)
			.then((res) => {
				setState(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}

export const CreateTask = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "616cc77a-6845-47f9-9270-281a68ff0dda"
		tasksApi.createTask(todolistId,"New Task 7777777")
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export const UpdateTaskTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "616cc77a-6845-47f9-9270-281a68ff0dda"
		let taskId = "abc04cb6-f15c-4bff-8f0e-a14e5ed22978"
		tasksApi.updateTask(todolistId,taskId, "New Task Name")
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "616cc77a-6845-47f9-9270-281a68ff0dda"
		let taskId = "f8fd4cb2-a09b-4819-b5dc-541c788d33bc"
		tasksApi.deleteTask(todolistId, taskId)
			.then((res) => {
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}