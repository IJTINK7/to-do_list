import React, {ChangeEvent, useState} from 'react';

export const Input = () => {
	const [inputValue, setInputValue] = useState<string>("")
	const [divValue, setDivValue] = useState<string>("Div value")
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setInputValue(e.currentTarget.value)
	}
	const changeDivValue = () => {
		setDivValue(inputValue)
		setInputValue("")
	}
	return (
		<div>
			<input value={inputValue} onChange={onChangeHandler}/>
			<button onClick={changeDivValue}>Set Input Value</button>
			<div>{divValue}</div>
		</div>
	);
};