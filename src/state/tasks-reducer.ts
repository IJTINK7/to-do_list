import {TasksStateType} from "../App";

export type SecondActionType = {
    type: ''
}
export type RemoveTaskACType = ReturnType<typeof removeTaskAC>


type ActionsType = RemoveTaskACType | SecondActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'REMOVE-TASK':
            return {...state, [action.todolistId]: state[action.todolistId].filter(t => t.id !== action.taskId)}
        case '':
            return state
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taskId: string,todolistId: string) => {
    return { type: 'REMOVE-TASK', todolistId, taskId} as const
}
export const secondAC = (title: string): SecondActionType => {
    return { type: ''}
}