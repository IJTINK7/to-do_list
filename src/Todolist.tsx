import React, {ChangeEvent, useState} from 'react';
import {FilterValuesType} from "./App";

type PropsType = {
	todolistId: string
	title: string
	tasks: TaskType[]
	removeTask: (todolistId: string, taskId: string) => void
	changeFilter: (todolistId: string, filterValue: FilterValuesType) => void
	filter: FilterValuesType
	addTask: (todolistId: string, taskTitle: string) => void
	changeTaskStatus: (todolistId: string, taskId: string, isDone: boolean) => void
	removeTodolist: (todolistId: string) => void
}
export type TaskType = {
	id: string
	title: string
	isDone: boolean
}
export const Todolist: React.FC<PropsType> = (props: PropsType) => {
	let [title, setTitle] = useState("")

	const [error, setError] = useState<string | null>(null)
	const removeTaskHandler = (taskId: string) => {
		props.removeTask(props.todolistId, taskId)
	}
	const changeFilterHandler = (filterValue: FilterValuesType) => {
		props.changeFilter(props.todolistId, filterValue)
	}
	const onChangeHandler = (taskId: string, e: ChangeEvent<HTMLInputElement>) => {
		props.changeTaskStatus(props.todolistId, taskId, e.currentTarget.checked)
	}
	const removeTodolistHandler = () => {
		props.removeTodolist(props.todolistId)
	}
	const addTaskHandler = (taskTitle: string) => {
		if (taskTitle.trim() !== "") {
			props.addTask(props.todolistId, taskTitle.trim())
			setTitle("")
		} else {
			setError("Title is required")
		}
	}


	return (
		<div>
			<h3>
				{props.title}
				<button onClick={removeTodolistHandler}>x</button>
			</h3>
			<div>
				<input value={title}
					   onChange={e => setTitle(e.currentTarget.value)}
					   onKeyPress={(e) => {
						   setError(null)
						   if (e.key === "Enter") {
							   addTaskHandler(title)
						   }
					   }}
					   className={error ? "error" : ""}
				/>
				<button onClick={() => addTaskHandler(title)}>+</button>
				{error && <div className={"error-message"}>{error}</div>}
			</div>
			<ul>
				{props.tasks.map(el => <li key={el.id} className={el.isDone ? "is-done" : ""}>
					<input type="checkbox" checked={el.isDone} onChange={(e) => onChangeHandler(el.id, e)}/>
					<span>{el.title}</span>
					<button onClick={() => removeTaskHandler(el.id)}>x</button>
				</li>)}
			</ul>
			<div>
				<button className={props.filter === "all" ? "active-filter" : ""} onClick={() => changeFilterHandler("all")}>All</button>
				<button className={props.filter === "active" ? "active-filter" : ""} onClick={() => changeFilterHandler("active")}>Active</button>
				<button className={props.filter === "completed" ? "active-filter" : ""} onClick={() => changeFilterHandler("completed")}>Completed</button>
			</div>
		</div>
	);
};