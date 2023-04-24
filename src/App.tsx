import React from 'react'
import './App.css'
import {Todolist} from "./Todolist";

function App() {
	const tasks1 = [
		{ id: 1, title: "HTML&CSS", isDone: true },
		{ id: 2, title: "JS", isDone: true },
		{ id: 3, title: "ReactJS", isDone: false }
	]
	const tasks2 = [
		{ id: 1, title: "Titanic", isDone: true },
		{ id: 2, title: "Terminator 2", isDone: true },
		{ id: 3, title: "Jaws", isDone: false }
	]
	return (
		<div className='App'>
			<Todolist
				title = "What to learn"
				tasks={tasks1}
			/>
			<Todolist
				title = "James Cameron's movies"
				tasks ={tasks2}
			/>
		</div>
	)
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