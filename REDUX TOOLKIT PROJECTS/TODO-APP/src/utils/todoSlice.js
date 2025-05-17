import { createSlice, nanoid } from "@reduxjs/toolkit";

const todoSlice = createSlice({
    name: "todo",
    initialState: {
        todos: [{ id: nanoid(), text: "Hello World" }]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(),
                text: action.payload
            }
            state.todos.push(todo)
        },

        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            const { id, text } = action.payload
            const todo = state.find((t) => t.id === id);
            if (todo) {
                todo.text = text;
            }
        },
    }
})

export const { addTodo, removeTodo,updateTodo } = todoSlice.actions
export default todoSlice.reducer
