import React, {useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from "./components/AddItemForm";
import {AppBar, Button, Container, Grid, IconButton, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";

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
	function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
		setTasks({...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskId ?  {...el, isDone}: el)})
	}
	function changeFilter(todolistID: string, value: FilterValuesType) {
		setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value}: el));
	}
	const removeTodolist = (todolistID: string) => {
		setTodolists(todolists.filter(el => el.id !== todolistID))
		delete tasks[todolistID]
	}
	const addNewTodolist = (newItem: string) =>{
		const newTodolistID = v1();
		const newTodolist:TodolistsType  = {id: newTodolistID, title: newItem, filter: "all"}
		setTodolists([newTodolist, ...todolists])
		setTasks({...tasks, [newTodolistID]: []})
	}
	const changeTaskTitle = (todolistID: string, taskId: string, newTitle: string) => {
		setTasks({...tasks, [todolistID]: tasks[todolistID].map(el=> el.id === taskId ? {...el, title: newTitle}: el )})
	}
	const changeTodolistTitle = (todolistID: string, newTitle: string) => {
		setTodolists(todolists.map(el => el.id === todolistID ? {...el, title: newTitle}: el))
	}
	return (
		<div className="App">
			<AppBar position="static">
				<Toolbar>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<Menu/>
					</IconButton>
					<Typography variant="h6">
						News
					</Typography>
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
			<Container fixed>
				<Grid container>
					<AddItemForm callBack={addNewTodolist}/>
				</Grid>
				<Grid container spacing={3}>
					{todolists.map(el=>{
						let tasksForTodolist = tasks[el.id];
						if (el.filter === "active") {
							tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
						}
						if (el.filter === "completed") {
							tasksForTodolist = tasks[el.id].filter(t => t.isDone);
						}
						return <Grid item>
							<Todolist
								key={el.id}
								todolistID={el.id}
								title={el.title}
								tasks={tasksForTodolist}
								removeTask={removeTask}
								changeFilter={changeFilter}
								addTask={addTask}
								changeTaskStatus={changeStatus}
								filter={el.filter}
								removeTodolist={removeTodolist}
								changeTaskTitle={changeTaskTitle}
								changeTodolistTitle={changeTodolistTitle}
							/>
						</Grid>

					})}
				</Grid>

			</Container>
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


// Todolist 05
//
// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, Todolist} from './Todolist';
// import {v1} from 'uuid';
//
// export type FilterValuesType = "all" | "active" | "completed";
//
// type TodolistsType ={
// 	id: string;
// 	title: string;
// 	filter: FilterValuesType;
// }
// type TasksType={
// 	[key: string]: Array<TaskType>
// }
//
// function App() {
// 	let todolistID1 = v1()
// 	let todolistID2 = v1()
//
// 	let [todolists, setTodolists] = useState<Array<TodolistsType>>([
// 		{id: todolistID1, title: "What to learn", filter: "all"},
// 		{id: todolistID2, title: "What to buy", filter: "all"},
// 	])

	// let [tasks, setTasks] = useState([
	// 	{id: v1(), title: "HTML&CSS", isDone: true},
	// 	{id: v1(), title: "JS", isDone: true},
	// 	{id: v1(), title: "ReactJS", isDone: false},
	// 	{id: v1(), title: "Rest API", isDone: false},
	// 	{id: v1(), title: "GraphQL", isDone: false},
	// ]);

// 	let [tasks, setTasks] = useState<TasksType>({
// 		[todolistID1]: [
// 			{id: v1(), title: 'HTML&CSS', isDone: true},
// 			{id: v1(), title: 'JS', isDone: true},
// 			{id: v1(), title: 'ReactJS', isDone: false},
// 			{id: v1(), title: 'Rest API', isDone: false},
// 			{id: v1(), title: 'Graph SQL', isDone: false},
//
// 		],
// 		[todolistID2]: [
// 			{id: v1(), title: 'Milk', isDone: true},
// 			{id: v1(), title: 'Fruits', isDone: true},
// 			{id: v1(), title: 'Nuts', isDone: true},
// 			{id: v1(), title: 'Bread', isDone: false},
// 			{id: v1(), title: 'Sugar', isDone: false},
// 		]
// 	})
// 	function removeTask(todolistID: string, taskID: string) {
// 		setTasks({...tasks, [todolistID]: tasks[todolistID].filter(el => el.id !== taskID)});
// 	}
// 	function addTask(todolistID: string, taskTitle: string) {
// 		let newTask = {id: v1(), title: taskTitle, isDone: false}
// 		setTasks({...tasks, [todolistID]: [ newTask, ...tasks[todolistID]]});
// 	}
// 	function changeStatus(todolistID: string, taskId: string, isDone: boolean) {
// 		setTasks({...tasks, [todolistID]: tasks[todolistID].map(el => el.id === taskId ?  {...el, isDone}: el)})
// 	}
// 	function changeFilter(todolistID: string, value: FilterValuesType) {
// 		setTodolists(todolists.map(el => el.id === todolistID ? {...el, filter: value}: el));
// 	}
//
// 	const removeTodolist = (todolistID: string) => {
// 		setTodolists(todolists.filter(el => el.id !== todolistID))
// 		delete tasks[todolistID]
// 	}
//
// 	return (
// 		<div className="App">
// 			{todolists.map(el=>{
// 				let tasksForTodolist = tasks[el.id];
// 				if (el.filter === "active") {
// 					tasksForTodolist = tasks[el.id].filter(t => !t.isDone);
// 				}
// 				if (el.filter === "completed") {
// 					tasksForTodolist = tasks[el.id].filter(t => t.isDone);
// 				}
// 				return <Todolist
// 					key={el.id}
// 					todolistID={el.id}
// 					title={el.title}
// 					tasks={tasksForTodolist}
// 					removeTask={removeTask}
// 					changeFilter={changeFilter}
// 					addTask={addTask}
// 					changeTaskStatus={changeStatus}
// 					filter={el.filter}
// 					removeTodolist={removeTodolist}
// 				/>
// 			})}
//
// 		</div>
// 	);
// }
//
// export default App;


//Todolist 06
// import React, {useState} from 'react';
// import './App.css';
// import {TaskType, Todolist} from './Todolist';
// import {v1} from 'uuid';
// import {AddItemForm} from "./components/AddItemForm";
//
// export type FilterValuesType = "all" | "active" | "completed";
// type TodolistType = {
// 	id: string
// 	title: string
// 	filter: FilterValuesType
// }
//
// type TasksStateType = {
// 	[key: string]: Array<TaskType>
// }
//
// function App() {
// 	let todolistId1 = v1();
// 	let todolistId2 = v1();
//
// 	let [todolists, setTodolists] = useState<Array<TodolistType>>([
// 		{id: todolistId1, title: "What to learn", filter: "all"},
// 		{id: todolistId2, title: "What to buy", filter: "all"},
// 	])
//
// 	let [tasks, setTasks] = useState<TasksStateType>({
// 		[todolistId1]: [
// 			{id: v1(), title: "HTML&CSS", isDone: true},
// 			{id: v1(), title: "JS", isDone: true}
// 		],
// 		[todolistId2]: [
// 			{id: v1(), title: "Milk", isDone: true},
// 			{id: v1(), title: "React Book", isDone: true}
// 		]
// 	});
//
//
// 	function removeTask(id: string, todolistId: string) {
// 		//достанем нужный массив по todolistId:
// 		let todolistTasks = tasks[todolistId];
// 		// перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
// 		tasks[todolistId] = todolistTasks.filter(t => t.id !== id);
// 		// засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
// 		setTasks({...tasks});
// 	}
// 	function addTask(title: string, todolistId: string) {
// 		let task = {id: v1(), title: title, isDone: false};
// 		//достанем нужный массив по todolistId:
// 		let todolistTasks = tasks[todolistId];
// 		// перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
// 		tasks[todolistId] = [task, ...todolistTasks];
// 		// засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
// 		setTasks({...tasks});
// 	}
// 	function changeStatus(id: string, isDone: boolean, todolistId: string) {
// 		//достанем нужный массив по todolistId:
// 		let todolistTasks = tasks[todolistId];
// 		// найдём нужную таску:
// 		let task = todolistTasks.find(t => t.id === id);
// 		//изменим таску, если она нашлась
// 		if (task) {
// 			task.isDone = isDone;
// 			// засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
// 			setTasks({...tasks});
// 		}
// 	}
// 	function changeFilter(value: FilterValuesType, todolistId: string) {
// 		let todolist = todolists.find(tl => tl.id === todolistId);
// 		if (todolist) {
// 			todolist.filter = value;
// 			setTodolists([...todolists])
// 		}
// 	}
// 	function removeTodolist(id: string) {
// 		// засунем в стейт список тудулистов, id которых не равны тому, который нужно выкинуть
// 		setTodolists(todolists.filter(tl => tl.id !== id));
// 		// удалим таски для этого тудулиста из второго стейта, где мы храним отдельно таски
// 		delete tasks[id]; // удаляем св-во из объекта... значением которого являлся массив тасок
// 		// засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
// 		setTasks({...tasks});
// 	}
// 	const addTodolists =(newItem: string)=>{
// 		const newTodolistId = v1();
// 		const newTodolist: TodolistType = {id: newTodolistId, title: newItem, filter: "all"}
// 		setTodolists([newTodolist, ...todolists])
// 		setTasks({...tasks, [newTodolistId]:[]})
// 	}
// 	const changeTaskTitle =(todolistId: string, taskID: string, newTitle: string)=>{
// 		setTasks({...tasks, [todolistId]: tasks[todolistId].map(el=>el.id === taskID ? {...el, title: newTitle}: el)})
// 	}
// 	const changeTodolistTitle = (todolistId: string, newTitle: string) => {
// 		setTodolists(todolists.map(el => el.id === todolistId ? {...el, title: newTitle}: el))
// 	}
//
// 	return (
// 		<div className="App">
// 			<AddItemForm callBack={addTodolists}/>
// 			{
// 				todolists.map(tl => {
// 					let allTodolistTasks = tasks[tl.id];
// 					let tasksForTodolist = allTodolistTasks;
//
// 					if (tl.filter === "active") {
// 						tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
// 					}
// 					if (tl.filter === "completed") {
// 						tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
// 					}
//
// 					return <Todolist
// 						key={tl.id}
// 						id={tl.id}
// 						title={tl.title}
// 						tasks={tasksForTodolist}
// 						removeTask={removeTask}
// 						changeFilter={changeFilter}
// 						addTask={addTask}
// 						changeTaskStatus={changeStatus}
// 						filter={tl.filter}
// 						removeTodolist={removeTodolist}
// 						changeTaskTitle={changeTaskTitle}
// 						changeTodolistTitle={changeTodolistTitle}
// 					/>
// 				})
// 			}
//
// 		</div>
// 	);
// }
//
// export default App;