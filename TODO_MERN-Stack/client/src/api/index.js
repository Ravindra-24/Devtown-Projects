import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:8080" });

API.interceptors.request.use((req) => {
  const user = JSON.parse(localStorage.getItem("profile"));
  if (user) {
    req.headers.authorization = `Bearer ${user.token}`;
  }
  return req;
});

export const signUp = (authData) => API.post("api/auth/signup", authData);
export const logIn = (authData) => API.post("api/auth/login", authData);

export const getTodos = () => API.get("api/todos");
export const AddTodo = (todo) => API.post("api/todos", todo);
export const deleteCurrentTodo = (todo_id) => API.delete(`api/todos/${todo_id}`);
export const todoStatus = (todo_id) => API.patch(`api/todos/${todo_id}`);
export const updateTitle = (todo_id, title) => API.patch(`api/todos/title/${todo_id}`, title);
