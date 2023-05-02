import React, {useState} from 'react';
type PropsType={
	oldTitle: string
}
export const EditableSpan = (props: PropsType) => {
	const [edit, setEdit] = useState(false)
	const editHandler = () => {
		setEdit(!edit)
	}
	return (
		edit
		? <input value={props.oldTitle} onBlur={editHandler} autoFocus/>
		: <span onDoubleClick={editHandler}>{props.oldTitle}</span>
	);
};