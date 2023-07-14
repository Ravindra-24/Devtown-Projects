const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const jwt = require("jsonwebtoken");

const dotenv = require("dotenv");
dotenv.config(__dirname + "/.env");

const { loger, authMiddleware } = require("./middleware/index");
// const pageRoutes = require("./routes/pages");
const authRoutes = require("./routes/api/auth");
const todoRoutes = require("./routes/api/todo");
const { initialiseDB } = require("./utils/db");

const PORT = 8080;

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    withCredentials: true,
  })
);
app.use(cookieParser());
app.use(express.static("public"));

// app.use("/", pageRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/todos", authMiddleware, todoRoutes);
app.use(loger);

initialiseDB();

app.get("/", (req, res) => {
  res.send(`server is running on ${PORT}`);
});

app.get("/validateUser/", (req, res) => {
  const { token } = req.headers;
  if (!token) {
    return res.status(401).json({
      message: "Invalid user",
    });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return res.status(200).json({
      message: "Valid user",
      user: decoded,
    });
  } catch (error) {
    res.clearCookie("access_token");
    return res.status(401).json({
      message: "Invalid user",
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
