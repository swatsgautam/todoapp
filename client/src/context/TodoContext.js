import React, { createContext, useState, useEffect } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

export const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]); //variable todo with empty array and setTodo function to update state


    // asynchronous function to retrieve todo items from api using http get req
    const fetchTodos = async () => {
        const response = await axios.get('http://localhost:5000/api/todos');
        setTodos(response.data); //response data which will be array to todo , is stored in tods using setdodo
    };


    //asynchronous function to add new todo, takes text as argument (text of todo)
    const addTodo = async (text) => {

        //sends https post req to api with new todo text
        const response = await axios.post('http://localhost:5000/api/todos', { text });
        setTodos((prevTodos) => [...prevTodos, response.data]); //append new item in existing list 
    };

    // Delete a todo
    const deleteTodo = async (id) => {
        console.log("Attempting to delete Todo with ID:", id); // Log the ID
        try {
            const response = await axios.delete(`http://localhost:5000/api/todos/${id}`);
            console.log("Response from delete:", response); // Log response for confirmation
            if (response.status === 204) {
                setTodos((prevTodos) => prevTodos.filter(todo => todo._id !== id));
            }
        } catch (err) {
            console.error("Error deleting todo:", err.response ? err.response.data : err.message);
        }
    };
    
    //it call fetchTodos function to retrieve the initial list of todos from api and populate todo state
    useEffect(() => {
        fetchTodos();
    }, []);

    return (
        //value prop contain todo state and addtodo function
        <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
            {children}
        </TodoContext.Provider>
    );
};
