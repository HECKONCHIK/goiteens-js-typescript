import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Todo } from "../App";

const initialState: Todo[] = []

const todoSlice = createSlice({
    name: 'todo',
    initialState,

    reducers: {
        addTodo(state, action: PayloadAction<string>) {
        const newTodo = { id: Date.now(), text: action.payload };
        state.push(newTodo)
        },

        deleteTodo(state, action: PayloadAction<number>) {
        return state.filter((todo) => todo.id !== action.payload);
        }
    }

})



export const { addTodo, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;