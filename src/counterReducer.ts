export type InitialStateType = {
	counter: CounterValueType
}

export type CounterValueType = {
	value: number
}
let initialState = {
	counter:{
		value: 0
	},
}

export const counterReducer = (state: InitialStateType = initialState, action: MainActionType): InitialStateType => {
	switch (action.type) {
	case "INCREASE-COUNTER":
		return {
			...state,
			counter: {
				...state.counter,
				value: state.counter.value + 1,
			},
		};

	case "DECREASE-COUNTER":
		return {
			...state,
			counter: {
				...state.counter,
				value: state.counter.value - 1,
			},
		};
	case "RESET-COUNTER":
		return {
			...state,
			counter: {
				...state.counter,
				value: 0,
			},
		};
	default:
		return state;
}
}
export type IncreaseCounterValueACType = ReturnType<typeof increaseCounterValueAC>
export type DecreaseCounterValueACType = ReturnType<typeof decreaseCounterValueAC>
export type ResetCounterValueACType = ReturnType<typeof resetCounterValueAC>

export type MainActionType = IncreaseCounterValueACType | DecreaseCounterValueACType | ResetCounterValueACType

export const increaseCounterValueAC = (counterValue: number) => {
	return {
		type: "INCREASE-COUNTER",
		counterValue
	} as const
}
export const decreaseCounterValueAC = (counterValue: number) => {
	return {type: "DECREASE-COUNTER", counterValue} as const
}
export const resetCounterValueAC = (counterValue: number) => {
	return {type: "RESET-COUNTER", counterValue} as const
}