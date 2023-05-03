import React, {useState} from 'react';

type PropsType = {
	title: string
}

export const EditableSpan = (props: PropsType) => {
	const [edit, setEdit] = useState(false)
	const editTitle = () => {
		setEdit(!edit)
	}
	return (
		edit
		?	<input value={props.title} onBlur={editTitle} autoFocus/>
		:	<span onDoubleClick={editTitle}>{props.title}</span>
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