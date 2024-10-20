import React from 'react';

const TodoItem = ({ todo, onDelete }) => { //todo prop which represents todo item
    const handleDelete = () => {
        onDelete(todo._id); // Call the onDelete function passed from the parent
    };
    return (
        <li className="todo-item"> {/* Individual todo item with class for styling */}
            {todo.text}
            <button onClick={handleDelete} className="delete-button"> {/* Delete button with class */}
                <i className="fas fa-trash"></i> {/* FontAwesome trash icon */}
            </button>
        </li>
    );
};

export default TodoItem;
