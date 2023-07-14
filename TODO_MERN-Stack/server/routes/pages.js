const express = require("express");
const router = express.Router();
const { authMiddleware } = require("../middleware/index");
const path = require("path");

router.get("/", authMiddleware, (req, res) => {
  res.sendFile(path.resolve() + "/pages/todos.html");
});

router.get("/login", (req, res) => {
  const token = req.cookies.access_token;
  if (token) {
    res.redirect("/");
  }
  res.sendFile(path.resolve() + "/pages/login.html");
});

router.get("/signup", (req, res) => {
  const token = req.cookies.access_token;
  if (token) {
    res.redirect("/");
  }
  res.sendFile(path.resolve() + "/pages/signup.html");
});

module.exports = router;
