const express = require('express') //imports express library
const mongoose = require('mongoose') //imports mongoose(library for mongodb and nodejs)

//imports cors middleware (cross-origin resourse sharing)
//allows server to accept request from different domains
const cors = require('cors') 

//imports body-parser, helps parse incoming request bodies in middleware
const bodyParser = require('body-parser') 
const todoRoutes = require("./routes/todoRoutes");

const app = express() //creates instance of express (used to manage and configure webserver & its routes)
const PORT = 5000; //port number on which server will run

app.use(cors()) //uses cors middleware in express app
app.use(bodyParser.json()) //uses bodyparser to parse JSON request

// MongoDB connection (useNewUrlParser,useUnifiedTopology used to avoid deprecation warnings)
mongoose.connect('mongodb://localhost:27017/todoapp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(()=>console.log("mongoDB connected"))
    .catch((err)=>console.log("MongoDB connection error", err))

// Routes
app.use("/api/todos", todoRoutes);


//start the server
app.listen(PORT, ()=>{
    console.log(`server is running on port ${PORT}`)
})
