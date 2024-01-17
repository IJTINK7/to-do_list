import React, {ChangeEvent, memo} from 'react';
import {Checkbox, IconButton} from "@mui/material";
import {EditableSpan} from "../EditableSpan";
import {Delete} from "@mui/icons-material";
import {TaskType} from "../Todolist";

type PropsType = {
	task: TaskType
	changeTaskStatus: (id: string, isDone: boolean, todolistId: string) => void
	changeTaskTitle: (taskId: string, newTitle: string, todolistId: string) => void
	removeTask: (taskId: string, todolistId: string) => void
	id: string
}

export const Task: React.FC<PropsType> = memo(({task,changeTaskStatus, changeTaskTitle, removeTask, id}) => {
	const onClickHandler = () => removeTask(task.id, id)
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		let newIsDoneValue = e.currentTarget.checked;
		changeTaskStatus(task.id, newIsDoneValue, id);
	}
	const onTitleChangeHandler = (newValue: string) => {
		changeTaskTitle(task.id, newValue, id);
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
});