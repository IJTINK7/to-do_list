import {combineReducers, legacy_createStore} from "redux";
import {todolistReducer} from "../reducers/todolists-reducer";
import {tasksReducer} from "../reducers/tasks-reduser";

const rootReducer = combineReducers({
	todolists: todolistReducer,
	tasks: tasksReducer
})
export const store = legacy_createStore(rootReducer);

export type AppRootStateType = ReturnType<typeof rootReducer>