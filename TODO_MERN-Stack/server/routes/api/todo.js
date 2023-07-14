const express = require("express");
const router = express.Router();
const ls = require("local-storage");
const uuid = require("uuid");

router.get("/", (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const todos = ls.get("todos").filter((todo) => todo.userId === id);
    return res.status(200).json({
      data: todos,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      data: null,
    });
  }
});

router.post("/", (req, res) => {
  try {
    const {
      user: { id },
    } = req;
    const { title } = req.body;
    const todos = ls.get("todos");
    const newTodo = {
      id: uuid.v4(),
      title: title,
      isCompleted: false,
      userId: id,
    };
    todos.push(newTodo);
    ls.set("todos", todos);
    return res.status(200).json({
      message: "Successfully added the todo",
      data: newTodo,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured",
      data: null,
    });
  }
});

router.delete("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todos = ls.get("todos");
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      const newTodos = todos.filter((todo) => todo.id !== id);
      ls.set("todos", newTodos);
      return res.status(200).json({
        message: "Successfully deleted the todo",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured",
      data: null,
    });
  }
});

router.patch("/:id", (req, res) => {
  try {
    const { id } = req.params;
    const todos = ls.get("todos");
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = !todo.isCompleted;
        }
        return todo;
      });
      ls.set("todos", newTodos);
      return res.status(200).json({
        message: "Successfully updated the todo",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured",
      data: null,
    });
  }
});

router.patch("/title/:id", (req, res) => {
  try {
    const { id } = req.params;
    const { title } = req.body;
    const todos = ls.get("todos");
    const todo = todos.find((todo) => todo.id === id);
    if (todo) {
      const newTodos = todos.map((todo) => {
        if (todo.id === id) {
          todo.title = title;
        }
        return todo;
      });
      ls.set("todos", newTodos);
      return res.status(200).json({
        message: "Successfully updated the todo",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: "Error Occured",
      data: null,
    });
  }
});

module.exports = router;
