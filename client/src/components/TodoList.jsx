import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
    const { todos, deleteTodo } = useContext(TodoContext); //to access the todos array 

    return (
        <div className="todo-list"> {/* Todo list container with class for styling */}
            <ul>
                {todos.map(todo => (
                    <TodoItem key={todo._id} todo={todo} onDelete={deleteTodo} />
                ))}
            </ul>
        </div>
    );
};

export default TodoList;
