import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';

export type FilterValuesType = "all" | "active" | "completed";

type TodolistsType ={
	id: string;
	title: string;
	filter: FilterValuesType;
}
type TasksType={
	[key: string]: Array<TaskType>
}

function App() {
	let todolistID1 = v1()
	let todolistID2 = v1()

	let [todolists, setTodolists] = useState<Array<TodolistsType>>([
		{id: todolistID1, title: "What to learn", filter: "all"},
		{id: todolistID2, title: "What to buy", filter: "all"},
	])

	// let [tasks, setTasks] = useState([
	// 	{id: v1(), title: "HTML&CSS", isDone: true},
	// 	{id: v1(), title: "JS", isDone: true},
	// 	{id: v1(), title: "ReactJS", isDone: false},
	// 	{id: v1(), title: "Rest API", isDone: false},
	// 	{id: v1(), title: "GraphQL", isDone: false},
	// ]);

	let [tasks, setTasks] = useState<TasksType>({
		[todolistID1]: [
			{id: v1(), title: 'HTML&CSS', isDone: true},
			{id: v1(), title: 'JS', isDone: true},
			{id: v1(), title: 'ReactJS', isDone: false},
			{id: v1(), title: 'Rest API', isDone: false},
			{id: v1(), title: 'Graph SQL', isDone: false},

		],
		[todolistID2]: [
			{id: v1(), title: 'Milk', isDone: true},
			{id: v1(), title: 'Fruits', isDone: true},
			{id: v1(), title: 'Nuts', isDone: true},
			{id: v1(), title: 'Bread', isDone: false},
			{id: v1(), title: 'Sugar', isDone: false},
		]
	})

	function removeTask(todolistID: string, taskID: string) {
		setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== taskID)});
	}

	function addTask(todolistID: string, taskTitle: string) {
		let newTask = {id: v1(), title: taskTitle, isDone: false}
		setTasks({...tasks, [todolistID]: [ newTask, ...tasks[todolistID]]});
	}

	function changeStatus(taskId: string, isDone: boolean) {
		// let task = tasks.find(t => t.id === taskId);
		// if (task) {
		// 	task.isDone = isDone;
		// }
		// setTasks([...tasks]);
	}

	function changeFilter(todolistID: string, value: FilterValuesType) {
		setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value}: el));
	}

	return (
		<div className="App">
			{todolists.map(el=>{
				let tasksForTodolist = tasks[el.id];
				if (el.filter === "active") {
					tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
				}
				if (el.filter === "completed") {
					tasksForTodolist = tasks[el.id].filter(t => t.isDone);
				}
				return <Todolist
					key={el.id}
					todolistID={el.id}
					title={el.title}
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