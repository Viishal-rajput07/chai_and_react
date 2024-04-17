import { useContext, createContext } from "react";

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: 'TodoMsg',
            completed: false
        },
    ],
    addTodo: (todo)=>{},
    updateTodo: (id, todo)=>{},
    deleteTodo: (id)=>{},
    completeTodo: (id)=>{},

})

export const TodoProvider = TodoContext.Provider

export const useTodo = ()=> {
    return useContext(TodoContext)
}

