import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "./counterReducer";

let rootReducer = combineReducers({
	superCounter: counterReducer
})
export type AppRootStateType = ReturnType<typeof rootReducer>

export let store = legacy_createStore(rootReducer)
