import React from 'react';
import {
	increaseCounterValueAC,
	decreaseCounterValueAC,
	resetCounterValueAC
} from "./counterReducer";
import {useDispatch, useSelector} from "react-redux";
import {AppRootStateType} from "./store";

export const Counter = () => {
	let counterValue = useSelector<AppRootStateType, number >(state => state.superCounter.counter.value)
	let dispatch = useDispatch()
	const increaseCounterValue = () => {
		dispatch(increaseCounterValueAC(counterValue))
	}
	const decreaseCounterValue = () => {
		dispatch(decreaseCounterValueAC(counterValue))
	}
	const resetCounterValue = () => {
		dispatch(resetCounterValueAC(counterValue))
	}
	return (
		<div>
			{counterValue}
			<button onClick={increaseCounterValue}>+</button>
			<button onClick={decreaseCounterValue}>-</button>
			<button onClick={resetCounterValue}>reset</button>
		</div>
	);
};