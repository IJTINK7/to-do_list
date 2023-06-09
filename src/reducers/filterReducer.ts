import {FilterValuesType} from "../App";

export const filterReducer = (state: FilterValuesType, action: ChangeFilterAC) => {
	switch (action.type){
		case "CHANGE-FILTER":{
			return action.payload.value
		}
		default:
			return state
	}
}

type ChangeFilterAC = ReturnType<typeof changeFilterAC>

export const changeFilterAC = (value:FilterValuesType) =>{
	return{
		type: "CHANGE-FILTER",
		payload:{
			value
		}
	} as const
}