import React, {memo, useCallback, useMemo} from 'react';
import {FilterValuesType} from './App';
import {AddItemForm} from './AddItemForm';
import {EditableSpan} from './EditableSpan';
import {IconButton} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {MyButton} from "./state/MyButton";
import {TaskWithRedux} from "./state/TaskWithRedux";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    id: string
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string, todolistId: string) => void
    changeFilter: (value: FilterValuesType, todolistId: string) => void
    addTask: (title: string, todolistId: string) => void
    changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
    removeTodolist: (id: string) => void
    changeTodolistTitle: (id: string, newTitle: string) => void
    filter: FilterValuesType
    changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
}

export const Todolist = memo((props: PropsType) => {
    const addTask = useCallback((title: string) => {
        props.addTask(title, props.id);
    }, [props])

    const removeTodolist = () => {
        props.removeTodolist(props.id);
    }
    const changeTodolistTitle = useCallback((title: string) => {
        props.changeTodolistTitle(props.id, title);
    }, [props])

    const onAllClickHandler = useCallback(() => props.changeFilter("all", props.id),[props]);
    const onActiveClickHandler = useCallback(() => props.changeFilter("active", props.id),[props]);
    const onCompletedClickHandler = useCallback(() => props.changeFilter("completed", props.id),[props]);

    let tasks = props.tasks;
    tasks = useMemo(()=>{
        if (props.filter === "active") {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            tasks = tasks.filter(t => !t.isDone);
        }
        if (props.filter === "completed") {
            tasks = tasks.filter(t => t.isDone);
        }
        return tasks
    }, [props.filter])

    return <div>
        <h3> <EditableSpan value={props.title} onChange={changeTodolistTitle} />
            <IconButton onClick={removeTodolist}>
                <Delete />
            </IconButton>
        </h3>
        <AddItemForm addItem={addTask}/>
        <div>
            {
                tasks.map(t => {
                       // return <Task key={t.id} task={t} changeTaskTitle={props.changeTaskTitle} id={props.id} changeTaskStatus={props.changeTaskStatus} removeTask={props.removeTask}/>
                    return <TaskWithRedux todolistId={props.id} taskId={t.id}/>
                })
            }
        </div>
        <div style={{ paddingTop: "10px"}}>
            <MyButton value ={"All1"} variant={props.filter === 'all' ? 'outlined' : 'text'} onClick={onAllClickHandler} color={'inherit'}/>
            <MyButton value ={"Active1"} variant={props.filter === 'active' ? 'outlined' : 'text'} onClick={onActiveClickHandler} color={'primary'}/>
            <MyButton value ={"Completed1"} variant={props.filter === 'completed' ? 'outlined' : 'text'} onClick={onCompletedClickHandler} color={'secondary'}/>
        </div>
    </div>
})


