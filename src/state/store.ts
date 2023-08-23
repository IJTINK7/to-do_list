import {createStoreHook} from "react-redux";
import {combineReducers, createStore} from "redux";
import {todolistsReducer} from "./todolists-reducer";
import {tasksReducer} from "./tasks-reducer";


type AppRootStoreType = ReturnType<typeof rootReducer>

const rootReducer = combineReducers({
	todolists: todolistsReducer,
	tasks: tasksReducer,
})

export const store = createStore(rootReducer);

// @ts-ignore
window.store = store;