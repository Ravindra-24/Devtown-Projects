const express = require("express");
const router = express.Router();
const ls = require("local-storage");
const uuid = require("uuid");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const SECRET_KEY = process.env.SECRET_KEY;

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const users = ls.get("users");
    const user = users.find((user) => user.email === email);
    if (!user) {
      return res.status(400).json({
        message: "User not found",
      });
    }
    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return res.status(400).json({
        message: "Password is incorrect",
      });
    }
    const token = jwt.sign({ id: user.id, email: user.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return res
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .status(200)
      .json({
        token: token,
        user: user,
      });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      data: null,
    });
  }
});

router.post("/signup", async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const users = ls.get("users");
    if (users.find((user) => user.email === email)) {
      return res.status(400).json({
        message: "User with this email already exists",
      });
    }
    const salt = bcrypt.genSaltSync(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = {
      id: uuid.v4(),
      name,
      email,
      password: hashedPassword,
    };
    users.push(newUser);
    ls.set("users", users);
    const token = jwt.sign({ id: newUser.id, email: newUser.email }, SECRET_KEY, {
      expiresIn: "1h",
    });
    return res.status(200).json({
      data: newUser,
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal Server Error",
      data: null,
    });
  }
});

module.exports = router;
