import React, {useState} from 'react';
import './App.css';
import {Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";
type TodolistsType ={
	id: string;
	title: string;
	filter: FilterValuesType;
}

function App() {
	let [todolists, setTodolists] = useState<Array<TodolistsType>>([
		{id: v1(), title: "What to learn", filter: "all"},
		{id: v1(), title: "What to buy", filter: "active"},
	])

	let [tasks, setTasks] = useState([
		{id: v1(), title: "HTML&CSS", isDone: true},
		{id: v1(), title: "JS", isDone: true},
		{id: v1(), title: "ReactJS", isDone: false},
		{id: v1(), title: "Rest API", isDone: false},
		{id: v1(), title: "GraphQL", isDone: false},
	]);
	let [filter, setFilter] = useState<FilterValuesType>("all");


	function removeTask(id: string) {
		let filteredTasks = tasks.filter(t => t.id !== id);
		setTasks(filteredTasks);
	}

	function addTask(title: string) {
		let task = {id: v1(), title: title, isDone: false};
		let newTasks = [task, ...tasks];
		setTasks(newTasks);
	}

	function changeStatus(taskId: string, isDone: boolean) {
		let task = tasks.find(t => t.id === taskId);
		if (task) {
			task.isDone = isDone;
		}

		setTasks([...tasks]);
	}


	let tasksForTodolist = tasks;

	if (filter === "active") {
		tasksForTodolist = tasks.filter(t => !t.isDone);
	}
	if (filter === "completed") {
		tasksForTodolist = tasks.filter(t => t.isDone);
	}

	function changeFilter(value: FilterValuesType) {
		setFilter(value);
	}


	return (
		<div className="App">
			{todolists.map(el=>{
				return <Todolist title={el.title}
								 tasks={tasksForTodolist}
								 removeTask={removeTask}
								 changeFilter={changeFilter}
								 addTask={addTask}
								 changeTaskStatus={changeStatus}
								 filter={el.filter}
				/>
			})}

		</div>
	);
}

export default App;

// Todolist 01

// import React from 'react'
// import './App.css'
// import {Todolist} from "./Todolist";
//
// function App() {
// 	const tasks1 = [
// 		{ id: 1, title: "HTML&CSS", isDone: true },
// 		{ id: 2, title: "JS", isDone: true },
// 		{ id: 3, title: "ReactJS", isDone: false }
// 	]
// 	const tasks2 = [
// 		{ id: 1, title: "Titanic", isDone: true },
// 		{ id: 2, title: "Terminator 2", isDone: true },
// 		{ id: 3, title: "Jaws", isDone: false }
// 	]
// 	return (
// 		<div className='App'>
// 			<Todolist
// 				title = "What to learn"
// 				tasks={tasks1}
// 			/>
// 			<Todolist
// 				title = "James Cameron's movies"
// 				tasks ={tasks2}
// 			/>
// 		</div>
// 	)
// }
//
// export default App;