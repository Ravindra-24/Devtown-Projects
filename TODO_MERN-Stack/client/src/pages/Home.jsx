import React from "react";
import TodoContainer from "../components/TodoContainer";
import AddTodo from "../components/AddTodo";
import { useSelector } from "react-redux";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  const User = useSelector((state) => state.currentUserReducer);
  const getTodos = useSelector((state) => state.todoReducer);

  return (
    <>
      <div className="fixed top-0 w-full z-10">
        <Navbar />
      </div>
      <div>
        <div
          className=" max-w-lg mx-auto my-8 bg-white p-8 rounded-xl shadow shadow-slate-300"
          style={{ position: "relative", marginBottom: 150, marginTop: 100 }}
        >
          <div className="flex flex-col justify-between items-center">
            <div>
              <h1 className="heading text-3xl font-medium">Todo list</h1>
            </div>
            <div className="relative w-full my-3">
              <AddTodo />
            </div>
          </div>
          {getTodos?.data?.data?.length === 0 ? (
            <>
              <p className="list-state text-slate-500 color-red">
                <span className="text-sky-600 font-semibold">
                  Hey {User?.user?.name || User?.data?.name}
                </span>
                ,{" "}
                <span className="text-emerald-500 font-semibold	">
                  add a todo!
                </span>
              </p>
            </>
          ) : (
            <>
              <p className="list-state text-slate-500">
                <span className="text-sky-600 font-semibold">
                  Hey {User?.user?.name || User?.data?.name}
                </span>
                ,
                <span className="text-lime-500 font-semibold">
                  {" "}
                  Here's Your TODOS...
                </span>
              </p>
            </>
          )}
          <div id="todo-container" />
          {getTodos.data === null ? (
            <h1>Loading...</h1>
          ) : (
            <>
              <TodoContainer getTodos={getTodos.data} />
            </>
          )}
          <p className="text-xs text-slate-500 text-center align-middle mt-3">
            Last updated:
            <span id="last-updated"> {new Date().toDateString()}</span>
          </p>
        </div>
      </div>
      <div className="fixed bottom-0 w-full">
        <Footer />
      </div>
    </>
  );
};

export default Home;
