import React, {ChangeEvent, memo} from 'react';
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "../EditableSpan";
import {Delete} from "@mui/icons-material";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";
import {changeTaskStatusAC, changeTaskTitleAC, removeTaskAC} from "./tasks-reducer";
import {TaskType} from "../Todolist";

type PropsType = {
	todolistId: string
	taskId: string
}
export const TaskWithRedux: React.FC<PropsType> = memo(({todolistId,taskId}) => {
	const task = useSelector<AppRootStateType, TaskType>(state => state.tasks[todolistId].filter(el => el.id !== taskId)[0])
	const dispatch = useDispatch()
	const onClickHandler = () => dispatch(removeTaskAC(taskId, todolistId))
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let newIsDoneValue = e.currentTarget.checked;
		dispatch(changeTaskStatusAC(taskId, newIsDoneValue, todolistId));
	}
	const onTitleChangeHandler = (newValue: string) => {
		dispatch(changeTaskTitleAC(taskId, newValue, todolistId));
	}
	return (
		<div className={task.isDone ? "is-done" : ""}>
			<Checkbox
				checked={task.isDone}
				color="primary"
				onChange={onChangeHandler}
			/>

			<EditableSpan value={task.title} onChange={onTitleChangeHandler} />
			<IconButton onClick={onClickHandler}>
				<Delete />
			</IconButton>
		</div>
	)
})