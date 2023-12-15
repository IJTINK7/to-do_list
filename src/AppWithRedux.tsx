import React, {useCallback, useState} from 'react';
import './App.css';
import {TaskType, Todolist} from "./Todolist";
import {addTodolistAC, changeFilterAC} from "./reducers/todolists-reducer";
import {
    addTaskAC,
    changeTaskStatusAC,
    removeTaskAC,
    removeTodolistAC
} from "./reducers/tasks-reduser";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store/store";

export type FilterValuesType = "all" | "active" | "completed"
export type TodolistsType = {
    id: string
    title: string
    filter: FilterValuesType
}

export type TasksType = {
    [key: string]: TaskType[]
}
function AppWithRedux() {
    let todolists = useSelector<AppRootStateType, TodolistsType[]>(state => state.todolists)
    let tasks = useSelector<AppRootStateType, TasksType>(state => state.tasks)
    const dispatch = useDispatch()

    let [newTodolistTitle, setNewTodolistTitle] = useState("")

    const changeFilter = useCallback((todolistId: string, filterValue: FilterValuesType) => {
        dispatch(changeFilterAC(todolistId, filterValue))
    }, [dispatch])
    const removeTask = useCallback((todolistId: string, taskId: string) =>{
        dispatch(removeTaskAC(todolistId, taskId))
    }, [dispatch])
    const addTask = useCallback((todolistId: string, taskTitle: string) => {
        dispatch(addTaskAC(todolistId, taskTitle))
    }, [dispatch])
    const changeTaskStatus = useCallback((todolistId: string, taskId: string, isDone: boolean) => {
        dispatch(changeTaskStatusAC(todolistId, taskId,isDone))
    }, [dispatch])
    const removeTodolist = useCallback((todolistId: string) => {
        dispatch(removeTodolistAC(todolistId))
    }, [dispatch])
    const addNewTodolist = useCallback((newTodolistTitle: string) => {
        if (newTodolistTitle.trim() !== "") {
            dispatch(addTodolistAC(newTodolistTitle))
            setNewTodolistTitle("")
        }
    }, [dispatch])

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

export default AppWithRedux;