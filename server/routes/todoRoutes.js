const express = require('express');
const router = express.Router(); //creates a new router instance using express.Router()
const Todo = require('../models/todoModel'); //imports the Todo model from the todoModel

// POST /api/todos
router.post('/', async (req, res) => {
    const todo = new Todo({ //creates a new instance of the Todo model
        text: req.body.text, //text field is populated with value provided in req body
    });

    try {
        const savedTodo = await todo.save(); //to save the new todo itemto database
        res.status(201).json(savedTodo); //is success , it responds with Status Code 201, returns todoitem as JSON
    } catch (err) {
        console.error(err); // Log error to console
        res.status(400).json({ message: err.message });
    }
});

// GET /api/todos
router.get('/', async (req, res) => {
    try {
        const todos = await Todo.find(); //find is called to retrieve all todo items from db
        res.status(200).json(todos); //on success it returns list of todos as JSON
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message }); //logs error , 500 for internal server error
    }
});

// DELETE /api/todos/:id
router.delete('/:id', async (req, res) => {
    try {
        const deletedTodo = await Todo.findByIdAndDelete(req.params.id);
        if (!deletedTodo) {
            return res.status(404).json({ message: "Todo not found" }); // Return 404 if not found
        }
        res.sendStatus(204); // Successfully deleted
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: err.message }); // Log the error and respond with a 500 error
    }
});

module.exports = router;
