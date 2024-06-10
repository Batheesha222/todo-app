const { timeStamp } = require("console");
const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const { title } = require("process");

const PORT = 8000;
//init app
const app = express();

const connectionUrl = "mongodb://0.0.0.0:27017/todoDb";

mongoose
  .connect(connectionUrl)
  .then(() => console.log("database connection successful"))
  .catch((error) => console.log(error.message));

const todoSchema = mongoose.Schema(
  { title: { type: String, required: true }, desc: String },
  { timeStamp: true }
);

//view engin
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.get("/", (req, res, next) => {
  try {
    res.render("index", { title: "list todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/add-todo", (req, res, next) => {
  try {
    res.render("newTodo", { title: "add todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/update-todo", (req, res, next) => {
  try {
    res.render("updateTodo", { title: "update todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

app.get("/delete-todo", (req, res, next) => {
  try {
    res.render("deleteTodo", { title: "delete todo" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// listen sever
app.listen(PORT, () => {
  console.log(`server is running on port ${PORT}`);
});
