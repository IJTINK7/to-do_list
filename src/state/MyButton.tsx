import React, {memo} from 'react';
import {Button} from "@mui/material";

type PropsType = {
	value: string
	variant: 'text' | 'outlined' | 'contained' | undefined
	onClick: ()=> void
	color: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning' | undefined
}
export const MyButton = memo( (props:PropsType) => {
	return (
			<Button variant={props.variant}	onClick={props.onClick}	color={props.color}>{props.value}</Button>
	);
});