import * as api from "../api";

export const getAllTodos = () => async (dispatch) => {
  try {
    const { data } = await api.getTodos();
    dispatch({ type: "FETCH_ALL_TODOS", payload: data });
  } catch (error) {
    console.log(error);
  }
};

export const postTodo = (todo) => async (dispatch) => {
  try {
    const { data } = await api.AddTodo(todo);
    dispatch({ type: "ADD_TODO", data });
    dispatch(getAllTodos());
  } catch (error) {
    console.log(error);
  }
};

export const deleteTodo = (todo_id) => async (dispatch) => {
  try {
    await api.deleteCurrentTodo(todo_id);
    dispatch(getAllTodos());
  } catch (error) {
    console.log(error);
  }
};

export const updateTodo = (todo_id) => async (dispatch) => {
  try {
    await api.todoStatus(todo_id);
    dispatch(getAllTodos());
  } catch (error) {
    console.log(error);
  }
};

export const newTitle = (todo_id, title) => async (dispatch) => {
  try {
    await api.updateTitle(todo_id, title);
    dispatch(getAllTodos());
  } catch (error) {
    console.log(error);
  }
};
