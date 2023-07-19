import {TasksStateType} from "../App";
import {v1} from "uuid";

export type RemoveTaskACType = ReturnType<typeof removeTaskAC>
export type AddTaskACACType = ReturnType<typeof addTaskAC>


type ActionsType = RemoveTaskACType | AddTaskACACType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case 'ADD-TASK':
            let task = {id: v1(), title: action.title, isDone: false};
            return {...state,[action.todolistId]: [task, ...state[action.todolistId]]}
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string,todolistId: string) => {
    return { type: 'REMOVE-TASK', todolistId, taskId} as const
}
export const addTaskAC = (title: string, todolistId: string) => {
    return { type: 'ADD-TASK',title,todolistId} as const
}