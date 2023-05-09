import React, {ChangeEvent, useState} from 'react';
import {TextField} from "@mui/material";

type PropsType = {
	oldTitle: string
	callBack:(updateTitle: string)=> void
}

export const EditableSpan = (props: PropsType) => {
	const [edit, setEdit] = useState(false)
	const [updateTitle, setUpdateTitle] = useState(props.oldTitle)

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setUpdateTitle(e.currentTarget.value)
	}

	const editTitle = () => {
		setEdit(!edit)
		props.callBack(updateTitle)
	}
	return (
		edit
		?	<TextField color={"secondary"} value={updateTitle} onBlur={editTitle} autoFocus onChange={onChangeHandler}/>
		:	<span onDoubleClick={editTitle}>{props.oldTitle}</span>
	);
};
// Todolist 06
//
// import React, {ChangeEvent, useState} from 'react';
// type PropsType={
// 	oldTitle: string
// 	callBack: (updateTitle:string) => void
// }
// export const EditableSpan = (props: PropsType) => {
// 	const [updateTitle, setUpdateTitle] = useState(props.oldTitle)
// 	const [edit, setEdit] = useState(false)
//
// 	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		setUpdateTitle(e.currentTarget.value)
// 	}
// 	const addTask =() => {
// 		props.callBack(updateTitle)
// 	}
// 	const editHandler = () => {
// 		setEdit(!edit)
// 		if(edit){
// 			addTask()
// 		}
// 	}
// 	return (
// 		edit
// 			? <input value={updateTitle} onBlur={editHandler} autoFocus onChange={onChangeHandler}/>
// 			: <span onDoubleClick={editHandler}>{props.oldTitle}</span>
// 	);
// };