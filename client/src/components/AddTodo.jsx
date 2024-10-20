import React, { useState, useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const AddTodo = () => {
    const { addTodo } = useContext(TodoContext); //access addtodo function
    const [text, setText] = useState(''); //initialize text variable with empty string, setText function to update 


    const handleAddTodo = () => {
        if (text) { //if text state is not empty
            addTodo(text); //calls addtodo function with current text value to add the new todo item
            setText(''); //resets the text and clears the field
        }
    };

    return (
        <div className="add-todo"> {/* Add todo section with class for styling */}
            <input 
                type="text" 
                value={text} 
                onChange={(e) => setText(e.target.value)} 
                className="todo-input" // Input with class for styling
                placeholder="Add a new todo"
            />
            <button onClick={handleAddTodo} className="add-button"> {/* Add button with class */}
                Add
            </button>
        </div>
    );
};

export default AddTodo;
