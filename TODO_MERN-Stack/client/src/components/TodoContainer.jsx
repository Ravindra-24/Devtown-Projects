import React, { useState } from "react";
import TodoList from "./TodoList";
import { useSelector } from "react-redux";

const TodoContainer = ({ getTodos }) => {
  return (
    <>
      { 
      getTodos.data.map((todo) => (
        <TodoList todo={todo} key={todo.id} />
      ))
      }
    </>
  );
};

export default TodoContainer;
