import {createContext,useContext} from 'react';

export const TodoContext = createContext({
    todos:[
        {
            id:1,
            todo:'work',
            completed:false,
        }
    ],
    addTodo:(todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleTodo:(id)=>{},
});

export const useTodoContext = ()=>{
    return useContext(TodoContext);
};

export const TodoContextProvider = TodoContext.Provider;

