import React, { useState } from "react";
import TodoItem from "./Components/TodoItem";
import AddTodoForm from "./Components/AddTodoForm";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { addTodo, deleteTodo } from "./redux/slice";

export interface Todo {
  id: number,
  text: string
}  

function App() {

  const todos = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch();

return (
  <div className="App">
    <h1>Todo List</h1>
    <AddTodoForm onAdd={(text)=>dispatch(addTodo(text))} />
    <ul>
      {todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} onDelete={(id)=>dispatch(deleteTodo(id))} />
      ))}
    </ul>
  </div>
  );
}

export default App;