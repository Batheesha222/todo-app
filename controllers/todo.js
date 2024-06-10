const Todo = require("../models/Todo");
const moment = require("moment");

const homeController = async (req, res, next) => {
    try {
        const todos = await Todo.find({}).sort({ createdAt: -1 });

        res.locals.moment = moment;
        res.render("index", { title: "list todo", todos });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addTodoFormController = (req, res, next) => {
    try {
        res.render("newTodo", { title: "add todo" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const updateTodoFormController = (req, res, next) => {
    try {
        res.render("updateTodo", { title: "update todo" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const deleteTodoPageController = (req, res, next) => {
    try {
        res.render("deleteTodo", { title: "delete todo" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const addTodoController = async (req, res, next) => {
    try {
        const { title, desc } = req.body;
        if (!title) {
            return res.status(400).json({ message: "title require" });
        }
        const newTodo = new Todo({ title, desc });
        await newTodo.save();
        res.redirect("/");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    homeController,
    addTodoFormController,
    updateTodoFormController,
    deleteTodoPageController,
    addTodoController,
};