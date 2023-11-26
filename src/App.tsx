import React, {useReducer, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {v1} from "uuid";
import {addTodolistAC, changeFilterAC, todolistReducer} from "./reducers/todolists-reducer";
import {
    addNewTodolistAC,
    addTaskAC,
    changeTaskStatusAC,
    removeTaskAC,
    removeTodolistAC,
    tasksReducer
} from "./reducers/tasks-reduser";

export type FilterValuesType = "all" | "active" | "completed"
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksType = {
    [key: string]: TaskType[]
}
function App() {

    let todolistID1 = v1()
    let todolistID2 = v1()

    let [todolists, dispatchToTodolists] = useReducer(todolistReducer,[
        {id: todolistID1, title: 'What to learn', filter: 'all'},
        {id: todolistID2, title: 'What to buy', filter: 'all'},
    ])

    let [tasks, dispatchToTasks] = useReducer(tasksReducer,{
        [todolistID1]: [
            {id: v1(), title: 'HTML&CSS', isDone: true},
            {id: v1(), title: 'JS', isDone: true},
            {id: v1(), title: 'ReactJS', isDone: false},

        ],
        [todolistID2]: [
            {id: v1(), title: 'Rest API', isDone: true},
            {id: v1(), title: 'GraphQL', isDone: false},
        ]
    })
    let [newTodolistTitle, setNewTodolistTitle] = useState("")


    const changeFilter = (todolistId: string, filterValue: FilterValuesType) => {
        dispatchToTodolists(changeFilterAC(todolistId, filterValue))
    }

    const removeTask = (todolistId: string, taskId: string) =>{
        dispatchToTasks(removeTaskAC(todolistId, taskId))
    }
    const addTask = (todolistId: string, taskTitle: string) => {
        dispatchToTasks(addTaskAC(todolistId, taskTitle))
    }
    const changeTaskStatus = (todolistId: string, taskId: string, isDone: boolean) => {
        dispatchToTasks(changeTaskStatusAC(todolistId, taskId,isDone))
    }
    const removeTodolist = (todolistId: string) => {
        dispatchToTodolists(removeTodolistAC(todolistId))
        dispatchToTasks(removeTodolistAC(todolistId))
    }

    const addNewTodolist = (newTodolistTitle: string) => {
        if (newTodolistTitle.trim() !== "") {
            const newTodolistId = v1();
            dispatchToTodolists(addTodolistAC(newTodolistTitle, newTodolistId))
            dispatchToTasks(addNewTodolistAC(newTodolistId))
        }
    }

    return (
        <div>
            <div>
                <input type="text"
                       value={newTodolistTitle}
                       onChange={e => setNewTodolistTitle(e.currentTarget.value)}
                />
                <button onClick={()=>addNewTodolist(newTodolistTitle)}>+</button>
            </div>
            <div className="App">
                {
                    todolists.map(tl=> {
                        let tasksForTodolist = tasks[tl.id]
                        if(tl.filter === "active"){
                            tasksForTodolist = tasks[tl.id].filter(el=> !el.isDone)
                        }
                        if(tl.filter === "completed"){
                            tasksForTodolist = tasks[tl.id].filter(el=> el.isDone)
                        }
                        return <Todolist
                            key={tl.id}
                            todolistId={tl.id}
                            title={tl.title}
                            tasks={tasksForTodolist}
                            removeTask={removeTask}
                            changeFilter={changeFilter}
                            filter={tl.filter}
                            addTask={addTask}
                            changeTaskStatus={changeTaskStatus}
                            removeTodolist={removeTodolist}
                        />
                    })
                }

            </div>
        </div>



    );
}

export default App;