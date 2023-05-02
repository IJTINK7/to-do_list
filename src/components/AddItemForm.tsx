import React from 'react';

export const AddItemForm = () => {
	return (
		<div>
			<input value={title}
				   onChange={onChangeHandler}
				   onKeyPress={onKeyPressHandler}
				   className={error ? "error" : ""}
			/>
			<button onClick={addTask}>+</button>
			{error && <div className="error-message">{error}</div>}
		</div>
	);
};