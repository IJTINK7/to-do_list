import React, {ChangeEvent} from 'react';
import {Checkbox} from "@mui/material";

type UnCheckboxPropsType={
	checked: boolean
	callBack:(e: ChangeEvent<HTMLInputElement>)=> void
}
export const UnCheckbox = (props: UnCheckboxPropsType) => {
	const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
		props.callBack(e)
	}
	return (
			<Checkbox checked={props.checked} onChange={onChangeHandler} />
	);
};
