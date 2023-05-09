import React, {ChangeEvent} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from "./components/AddItemForm";
import {EditableSpan} from "./components/EditableSpan";
import {Button, IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";

export type TaskType = {
	id: string
	title: string
	isDone: boolean
}

type PropsType = {
	todolistID: string
	title: string
	tasks: Array<TaskType>
	removeTask: (todolistID: string, taskID: string) => void
	changeFilter: (todolistID: string, value: FilterValuesType) => void
	addTask: (todolistID: string, taskTitle: string) => void
	changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
	filter: FilterValuesType
	removeTodolist: (todolistID: string) => void
	changeTaskTitle: (todolistID: string, taskId: string, newTitle: string) => void
	changeTodolistTitle: (todolistID: string, newTitle: string) => void
}

export function Todolist(props: PropsType) {
	const onAllClickHandler = () => props.changeFilter(props.todolistID, "all");
	const onActiveClickHandler = () => props.changeFilter(props.todolistID, "active");
	const onCompletedClickHandler = () => props.changeFilter(props.todolistID, "completed");
	const removeTodolistHandler = () => {
		props.removeTodolist(props.todolistID)
	}
	const addNewItemHandler = (newItem: string) => {
		props.addTask(props.todolistID, newItem)
	}
	const changeTodolistTitleHandler = (updateTitle: string) => {
		props.changeTodolistTitle(props.todolistID, updateTitle)
	}
	return <div>
		<h3>
			<EditableSpan oldTitle={props.title} callBack={changeTodolistTitleHandler}/>
			<IconButton onClick={removeTodolistHandler}>
				<Delete/>
			</IconButton>
		</h3>
		<AddItemForm callBack={addNewItemHandler}/>
		<ul>
			{
				props.tasks.map(t => {
					const onClickHandler = () => props.removeTask(props.todolistID, t.id)
					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
						props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
					}
					const changeTaskHandler = (updateTitle: string) => {
						props.changeTaskTitle(props.todolistID, t.id, updateTitle);
					}

					return <li key={t.id} className={t.isDone ? "is-done" : ""}>
						<input type="checkbox"
							   onChange={onChangeHandler}
							   checked={t.isDone}/>
						<EditableSpan oldTitle={t.title} callBack={changeTaskHandler}/>
						<IconButton onClick={onClickHandler}>
							<Delete/>
						</IconButton>
					</li>
				})
			}
		</ul>
		<div>
			<Button variant={props.filter === 'all' ? "contained" : "text"}
					onClick={onAllClickHandler}>All</Button>
			<Button color={"warning"} variant={props.filter === 'active' ? "contained" : "text"}
					onClick={onActiveClickHandler}>Active</Button>
			<Button color={"success"} variant={props.filter === 'completed' ? "contained" : "text"}
					onClick={onCompletedClickHandler}>Completed</Button>
		</div>
	</div>
}


// Todolist 01

//import React from "react";
//
// type TasksType={
// 	id: number;
// 	title: string;
// 	isDone: boolean;
// }
//
// type PropsType ={
// 	title: string
// 	tasks: Array<TasksType>
// }
// export const Todolist = (props:PropsType) => {
// 	return (
// 		<div>
// 			<h3>{props.title}</h3>
// 			<div>
// 				<input/>
// 				<button>+</button>
// 			</div>
// 			<ul>
// 				<li><input type='checkbox' checked={props.tasks[0].isDone}/><span>{props.tasks[0].title}</span></li>
// 				<li><input type='checkbox' checked={props.tasks[1].isDone}/><span>{props.tasks[1].title}</span></li>
// 				<li><input type='checkbox' checked={props.tasks[2].isDone}/><span>{props.tasks[2].title}</span></li>
// 			</ul>
// 			<div>
// 				<button>All</button>
// 				<button>Active</button>
// 				<button>Completed</button>
// 			</div>
// 		</div>
// 	)
// }

// Todolist 05

// import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
// import {FilterValuesType} from './App';
//
// export type TaskType = {
// 	id: string
// 	title: string
// 	isDone: boolean
// }
//
// type PropsType = {
// 	todolistID: string
// 	title: string
// 	tasks: Array<TaskType>
// 	removeTask: (todolistID: string, taskID: string) => void
// 	changeFilter: (todolistID: string, value: FilterValuesType) => void
// 	addTask: (todolistID: string, taskTitle: string) => void
// 	changeTaskStatus: (todolistID: string, taskId: string, isDone: boolean) => void
// 	filter: FilterValuesType
// 	removeTodolist: (todolistID: string) => void
// }
//
// export function Todolist(props: PropsType) {
//
// 	let [title, setTitle] = useState("")
// 	let [error, setError] = useState<string | null>(null)
//
// 	const addTask = () => {
// 		if (title.trim() !== "") {
// 			props.addTask(props.todolistID, title.trim());
// 			setTitle("");
// 		} else {
// 			setError("Title is required");
// 		}
// 	}
//
// 	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		setTitle(e.currentTarget.value)
// 	}
//
// 	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
// 		setError(null);
// 		if (e.charCode === 13) {
// 			addTask();
// 		}
// 	}
//
// 	const onAllClickHandler = () => props.changeFilter(props.todolistID, "all");
// 	const onActiveClickHandler = () => props.changeFilter(props.todolistID, "active");
// 	const onCompletedClickHandler = () => props.changeFilter(props.todolistID, "completed");
// 	const removeTodolistHandler = () => {
// 		props.removeTodolist(props.todolistID)
// 	}
//
// 	return <div>
// 		<h3>
// 			{props.title}
// 			<button onClick={removeTodolistHandler}>X</button>
// 		</h3>
// 		<div>
// 			<input value={title}
// 				   onChange={onChangeHandler}
// 				   onKeyPress={onKeyPressHandler}
// 				   className={error ? "error" : ""}
// 			/>
// 			<button onClick={addTask}>+</button>
// 			{error && <div className="error-message">{error}</div>}
// 		</div>
// 		<ul>
// 			{
// 				props.tasks.map(t => {
// 					const onClickHandler = () => props.removeTask(props.todolistID, t.id)
// 					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 						props.changeTaskStatus(props.todolistID, t.id, e.currentTarget.checked);
// 					}
//
// 					return <li key={t.id} className={t.isDone ? "is-done" : ""}>
// 						<input type="checkbox"
// 							   onChange={onChangeHandler}
// 							   checked={t.isDone}/>
// 						<span>{t.title}</span>
// 						<button onClick={onClickHandler}>x</button>
// 					</li>
// 				})
// 			}
// 		</ul>
// 		<div>
// 			<button className={props.filter === 'all' ? "active-filter" : ""}
// 					onClick={onAllClickHandler}>All</button>
// 			<button className={props.filter === 'active' ? "active-filter" : ""}
// 					onClick={onActiveClickHandler}>Active</button>
// 			<button className={props.filter === 'completed' ? "active-filter" : ""}
// 					onClick={onCompletedClickHandler}>Completed</button>
// 		</div>
// 	</div>
// }

//Todolist 06
// import React, {ChangeEvent} from 'react';
// import {FilterValuesType} from './App';
// import {AddItemForm} from "./components/AddItemForm";
// import {EditableSpan} from "./components/EditableSpan";
//
// export type TaskType = {
// 	id: string
// 	title: string
// 	isDone: boolean
// }
//
// type PropsType = {
// 	id: string
// 	title: string
// 	tasks: Array<TaskType>
// 	removeTask: (taskId: string, todolistId: string) => void
// 	changeFilter: (value: FilterValuesType, todolistId: string) => void
// 	addTask: (title: string, todolistId: string) => void
// 	changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
// 	removeTodolist: (id: string) => void
// 	filter: FilterValuesType
// 	changeTaskTitle: (todolistId: string, taskID: string, newTitle: string) => void
// 	changeTodolistTitle: (todolistId: string, newTitle: string) => void
// }
//
// export function Todolist(props: PropsType) {
//
// 	const removeTodolist = () => props.removeTodolist(props.id)
//
// 	const onAllClickHandler = () => props.changeFilter("all", props.id);
// 	const onActiveClickHandler = () => props.changeFilter("active", props.id);
// 	const onCompletedClickHandler = () => props.changeFilter("completed", props.id);
// 	const addItemHandler =(newTitle:string)=>{
// 		props.addTask(newTitle, props.id)
// 	}
// 	const changeTodolistTitleHandler = (newTitle:string) => {
// 		props.changeTodolistTitle(props.id, newTitle)
// 	}
//
// 	return <div>
// 		<h3> <EditableSpan oldTitle={props.title} callBack={changeTodolistTitleHandler}/>
// 			<button onClick={removeTodolist}>x</button>
// 		</h3>
// 		<AddItemForm callBack={addItemHandler}/>
// 		<ul>
// 			{
// 				props.tasks.map(t => {
// 					const onClickHandler = () => props.removeTask(t.id, props.id)
// 					const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 						let newIsDoneValue = e.currentTarget.checked;
// 						props.changeTaskStatus(t.id, newIsDoneValue, props.id);
// 					}
// 					const changeTaskHandler = (newTitle: string) => {
// 						props.changeTaskTitle(props.id, t.id, newTitle)
// 					}
//
// 					return <li key={t.id} className={t.isDone ? "is-done" : ""}>
// 						<input type="checkbox" onChange={onChangeHandler} checked={t.isDone}/>
// 						{/*<span>{t.title}</span>*/}
// 						<EditableSpan oldTitle={t.title} callBack={changeTaskHandler}/>
// 						<button onClick={onClickHandler}>x</button>
// 					</li>
// 				})
// 			}
// 		</ul>
// 		<div>
// 			<button className={props.filter === 'all' ? "active-filter" : ""}
// 					onClick={onAllClickHandler}>All
// 			</button>
// 			<button className={props.filter === 'active' ? "active-filter" : ""}
// 					onClick={onActiveClickHandler}>Active
// 			</button>
// 			<button className={props.filter === 'completed' ? "active-filter" : ""}
// 					onClick={onCompletedClickHandler}>Completed
// 			</button>
// 		</div>
// 	</div>
// }
