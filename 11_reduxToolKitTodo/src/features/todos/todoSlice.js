import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos:[{
        id:nanoid(),
        text: "Learn Redux Toolkit!!",
    }]
}

export const todoSlice = createSlice({
    name : 'todo',
    initialState,
    reducers:{
        addTodo : (state,action)=>{
            const todo  = {
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo);
            
        },
        removeTodo:(state,action)=>{
            const id = action.payload;
            state.todos = state.todos.filter((todo)=> todo.id!==id);
        },
        updateTodo: (state, action)=>{
            const id = action.payload.id;
            console.log(id);
            console.log(typeof(action.payload.text));
            //console.log(action.payload);
            state.todos = state.todos.map((todo)=> todo.id===id? todo.text=action.payload.text : todo)
        },
    }
})


export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;

export default todoSlice.reducer;