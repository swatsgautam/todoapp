const mongoose = require("mongoose");

//creates a new Mongoose schema
const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
});

//creates a Mongoose model named Todo based on the todoSchema
//allows us to interact with the todos collection in the MongoDB database
const Todo = mongoose.model("Todo", todoSchema); 

module.exports = Todo;
