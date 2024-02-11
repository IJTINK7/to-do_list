import React, {useEffect, useState} from 'react';
import axios from "axios";

const settings = {
	withCredentials: true,
	headers:{
		"API-KEY": "ce6bdb2d-53b5-4b5f-9621-9590c51cbce5"
	}
}

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
		// здесь мы будем делать запрос и ответ закидывать в стейт.
		// который в виде строки будем отображать в div-ке
		axios.get("https://social-network.samuraijs.com/api/1.1/todo-lists", settings)
			.then((res)=>{
				setState(res.data)
			})
	}, [])
	return <div>{JSON.stringify(state)}</div>
}
//
export const CreateTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		axios.post("https://social-network.samuraijs.com/api/1.1/todo-lists",{title: "myTodolist"}, settings)
			.then((res)=>{
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export const UpdateTodolistTitle = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "9e6527b9-95b8-41f1-b1a9-21c96c2825f3"
		axios.put(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`,{title: "hisTodolist"}, settings)
			.then((res)=>{
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}

export const DeleteTodolist = () => {
	const [state, setState] = useState<any>(null)
	useEffect(() => {
		let todolistId = "cbda31c5-cd5b-41c1-b2b4-2287ae5af0c3"
		axios.delete(`https://social-network.samuraijs.com/api/1.1/todo-lists/${todolistId}`, settings)
			.then((res)=>{
				setState(res.data)
			})
	}, [])

	return <div>{JSON.stringify(state)}</div>
}