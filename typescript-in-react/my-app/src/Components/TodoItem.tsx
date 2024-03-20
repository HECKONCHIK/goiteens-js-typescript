import { FC } from "react";
import { Todo } from "../App";

interface TodoItemProps {
    todo: Todo,
    onDelete: (id: number ) => void
}

const TodoItem: FC<TodoItemProps> = ({ todo, onDelete }) => {
return (
    <li>
        <p>{todo.text}</p>
        <button onClick={() => onDelete(todo.id)}>Delete</button>
    </li>
    );
};

export default TodoItem;