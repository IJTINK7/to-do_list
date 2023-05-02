import React, {useState} from 'react';
type PropsType={
	oldTitle: string
}
export const EditableSpan = (props: PropsType) => {
	const [edit, setEdit] = useState(false)
	return (
		edit
		? <input value={props.oldTitle}/>
		: <span>{props.oldTitle}</span>
	);
};