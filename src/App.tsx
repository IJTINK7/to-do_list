import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from './Todolist';
import {v1} from 'uuid';
import {AddItemForm} from './AddItemForm';
import AppBar from '@mui/material/AppBar/AppBar';
import {Button, Container, Grid, IconButton, Paper, Toolbar, Typography} from "@mui/material";
import {Menu} from "@mui/icons-material";
import {
	addTodolistAC,
	changeTodolistFilterAC,
	changeTodolistTitleAC,
	removeTodolistAC,
	todolistReducer
} from "./reducers/todolistReducer";
import {addNewTasksAC, tasksReducer} from "./reducers/tasksReducer";


export type FilterValuesType = "all" | "active" | "completed";
export type TodolistType = {
	id: string
	title: string
	filter: FilterValuesType
}

export type TasksStateType = {
	[key: string]: Array<TaskType>
}

function App() {
	let todolistId1 = v1();
	let todolistId2 = v1();

	let [todolists, dispatchTodolists] = useReducer(todolistReducer, [
		{id: todolistId1, title: "What to learn", filter: "all"},
		{id: todolistId2, title: "What to buy", filter: "all"}
	])

	let [tasks, dispatchTasks] = useReducer(tasksReducer, {
		[todolistId1]: [
			{id: v1(), title: "HTML&CSS", isDone: true},
			{id: v1(), title: "JS", isDone: true}
		],
		[todolistId2]: [
			{id: v1(), title: "Milk", isDone: true},
			{id: v1(), title: "React Book", isDone: true}
		]
	});

	function removeTask(id: string, todolistId: string) {
		// //достанем нужный массив по todolistId:
		// let todolistTasks = tasks[todolistId];
		// // перезапишем в этом объекте массив для нужного тудулиста отфилтрованным массивом:
		// tasks[todolistId] = todolistTasks.filter(t => t.id != id);
		// // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
		// setTasks({...tasks});
	}

	function addTask(title: string, todolistId: string) {
		// let task = {id: v1(), title: title, isDone: false};
		// //достанем нужный массив по todolistId:
		// let todolistTasks = tasks[todolistId];
		// // перезапишем в этом объекте массив для нужного тудулиста копией, добавив в начало новую таску:
		// tasks[todolistId] = [task, ...todolistTasks];
		// // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
		// setTasks({...tasks});
	}

	function changeStatus(id: string, isDone: boolean, todolistId: string) {
		// //достанем нужный массив по todolistId:
		// let todolistTasks = tasks[todolistId];
		// // найдём нужную таску:
		// let task = todolistTasks.find(t => t.id === id);
		// //изменим таску, если она нашлась
		// if (task) {
		//     task.isDone = isDone;
		//     // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
		//     setTasks({...tasks});
		// }
	}

	function changeTaskTitle(id: string, newTitle: string, todolistId: string) {
		// //достанем нужный массив по todolistId:
		// let todolistTasks = tasks[todolistId];
		// // найдём нужную таску:
		// let task = todolistTasks.find(t => t.id === id);
		// //изменим таску, если она нашлась
		// if (task) {
		//     task.title = newTitle;
		//     // засетаем в стейт копию объекта, чтобы React отреагировал перерисовкой
		//     setTasks({...tasks});
		// }
	}

	function changeFilter(todolistID: string, value: FilterValuesType) {
		dispatchTodolists(changeTodolistFilterAC(todolistID, value))
	}

	function removeTodolist(todolistID: string) {
		dispatchTodolists(removeTodolistAC(todolistID))
	}

	function changeTodolistTitle(todolistID: string, title: string) {
		dispatchTodolists(changeTodolistTitleAC(todolistID, title))
	}

	function addTodolist(title: string) {
		let newTodolistId = v1();
		dispatchTodolists(addTodolistAC(newTodolistId, title))
		dispatchTasks(addNewTasksAC(newTodolistId))
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
				<Grid container style={{padding: "20px"}}>
					<AddItemForm addItem={addTodolist}/>
				</Grid>
				<Grid container spacing={3}>
					{
						todolists.map(tl => {
							let allTodolistTasks = tasks[tl.id];
							let tasksForTodolist = allTodolistTasks;

							if (tl.filter === "active") {
								tasksForTodolist = allTodolistTasks.filter(t => !t.isDone);
							}
							if (tl.filter === "completed") {
								tasksForTodolist = allTodolistTasks.filter(t => t.isDone);
							}

							return <Grid key={tl.id} item>
								<Paper style={{padding: "10px"}}>
									<Todolist
										key={tl.id}
										id={tl.id}
										title={tl.title}
										tasks={tasksForTodolist}
										removeTask={removeTask}
										changeFilter={changeFilter}
										addTask={addTask}
										changeTaskStatus={changeStatus}
										filter={tl.filter}
										removeTodolist={removeTodolist}
										changeTaskTitle={changeTaskTitle}
										changeTodolistTitle={changeTodolistTitle}
									/>
								</Paper>
							</Grid>
						})
					}
				</Grid>
			</Container>
		</div>
	);
}

export default App;
