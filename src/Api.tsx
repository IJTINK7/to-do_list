import React, {useEffect, useState} from 'react';
import {taskApi, todolistApi} from "./api/todolists-api";


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


let todolistId = "5cb9cb26-3bcb-49c2-ac5e-8c072965f516"

export const GetTasks = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		taskApi.getTasks(todolistId)
			.then((res)=>{
				setState(res.data)
				console.log(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		taskApi.createTask(todolistId,"My Task")
			.then((res)=>{
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let taskId = "70245a08-48e8-4dd1-99d0-d5d97d4bf143"
		taskApi.updateTask(todolistId, taskId,"NEW TASK")
			.then((res)=>{
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let taskId = "2d9824d5-2b6f-4688-9af3-d48bc6c2a953"
		taskApi.deleteTask(todolistId, taskId)
			.then((res)=>{
				setState(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}

