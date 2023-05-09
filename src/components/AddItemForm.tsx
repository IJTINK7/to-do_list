import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {Button} from "@mui/material";

type PropsType = {
	callBack: (newItem: string)=>void;
}
export const AddItemForm = (props:PropsType) => {
	let [title, setTitle] = useState("")
	let [error, setError] = useState<string | null>(null)

	const addTask = () => {
		if (title.trim() !== "") {
			props.callBack(title.trim());
			setTitle("");
		} else {
			setError("Title is required");
		}
	}

	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTitle(e.currentTarget.value)
	}

	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
		setError(null);
		if (e.charCode === 13) {
			addTask();
		}
	}

	return (
		<div>
			<input value={title}
				   onChange={onChangeHandler}
				   onKeyPress={onKeyPressHandler}
				   className={error ? "error" : ""}
			/>
			<Button onClick={addTask}>+</Button>
			{error && <div className="error-message">{error}</div>}
		</div>
	);
};

// Todolist 06

// import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
//
// type PropsType ={
// 	callBack: (newTitle:string) => void
// }
// export const AddItemForm = (props: PropsType) => {
// 	let [title, setTitle] = useState("")
// 	let [error, setError] = useState<string | null>(null)
//
// 	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
// 		setTitle(e.currentTarget.value)
// 	}
// 	const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
// 		setError(null);
// 		if (e.charCode === 13) {
// 			addTask();
// 		}
// 	}
// 	const addTask = () => {
// 		let newTitle = title.trim();
// 		if (newTitle !== "") {
// 			props.callBack(newTitle);
// 			setTitle("");
// 		} else {
// 			setError("Title is required");
// 		}
// 	}
// 	return (
// 		<div>
// 			<input value={title}
// 				   onChange={onChangeHandler}
// 				   onKeyPress={onKeyPressHandler}
// 				   className={error ? "error" : ""}
// 			/>
// 			<button onClick={addTask}>+</button>
// 			{error && <div className="error-message">{error}</div>}
// 		</div>
// 	);
// };