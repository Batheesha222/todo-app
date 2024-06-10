const express = require("express");
const mongoose = require("mongoose");
const path = require("path")

const PORT  =  8000;
//init app
const app = express();

const connectionUrl = "mongodb://0.0.0.0:27017/todoDb";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("database connection successful"))
  .catch((error) => console.log(error.message));

  //view engin
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")))
app.get("/", (req,res,next)=>{
    try {
        res.render("index")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/add-todo", (req,res,next)=>{
    try {
        res.render("newTodo")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/update-todo", (req,res,next)=>{
    try {
        res.render("updateTodo")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

app.get("/delete-todo", (req,res,next)=>{
    try {
        res.render("deleteTodo")
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})

// listen sever
app.listen(PORT,()=>{
    console.log(`server is running on port ${PORT}`)
})