import { createContext, useContext } from "react";

export const TaskContext = createContext({
    todo : [
        {
            id:0,
            todo:'0',
            completed : false
        }
    ],
    addTasks : (todo) => {},
    updateTasks : (id,todo) => {},
    deleteTask : (id) => {},
    check : (id) => {}
})



export const TaskContextProvider = TaskContext.Provider

export default function useTaskContext() {
    return useContext(TaskContext)
}