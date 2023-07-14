import React from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import decode from "jwt-decode";
import { useEffect } from "react";
import { useSelector } from "react-redux";

import { getAllTodos } from "../action/todos";
import { setCurrentUser } from "../action/setCurrentUser";

const Navbar = () => {
  const User = useSelector((state) => state.currentUserReducer);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
    navigate("/login");
    dispatch(setCurrentUser(null));
  };

  useEffect(() => {
    const token = User?.token;
    if (token) {
      const decodedToken = decode(token);
      if (decodedToken.exp * 1000 < new Date().getTime()) {
        handleLogout();
      }
    }
    dispatch(setCurrentUser(JSON.parse(localStorage.getItem("profile"))));

    if (!User) {
      navigate("/login");
    }
    dispatch(getAllTodos());
  }, [navigate, dispatch]);

  return (
    <>
      {/* Main navigation container */}
      <nav
        className="flex-no-wrap relative flex w-full items-center justify-between bg-[#FBFBFB] py-2 shadow-md shadow-black/5 dark:bg-neutral-600 dark:shadow-black/10 lg:flex-wrap lg:justify-start lg:py-4"
        data-te-navbar-ref=""
      >
        <div className="flex w-full flex-wrap items-center justify-between px-3">
          {/* Hamburger button for mobile view */}
          <button
            className="block border-0 bg-transparent px-2 text-neutral-500 hover:no-underline hover:shadow-none focus:no-underline focus:shadow-none focus:outline-none focus:ring-0 dark:text-neutral-200 lg:hidden"
            type="button"
            data-te-collapse-init=""
            data-te-target="#navbarSupportedContent1"
            aria-controls="navbarSupportedContent1"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* Hamburger icon */}
            <span className="[&>svg]:w-7">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-7 w-7"
              >
                <path
                  fillRule="evenodd"
                  d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </button>
          {/* Collapsible navigation container */}
          <div
            className="!visible hidden flex-grow basis-[100%] items-center lg:!flex lg:basis-auto"
            id="navbarSupportedContent1"
            data-te-collapse-item=""
          >
            {/* Logo */}
            <Link
              className="mb-4 ml-2 mr-5 mt-3 flex items-center text-neutral-900 hover:text-neutral-900 focus:text-neutral-900 dark:text-neutral-200 dark:hover:text-neutral-400 dark:focus:text-neutral-400 lg:mb-0 lg:mt-0"
              href="#"
            >
              <img
                src="https://i.pinimg.com/originals/84/4c/7d/844c7d64b81709a519701a29693b6125.jpg"
                style={{ width: 40, mixBlendMode: "multiply" }}
                alt="TE Logo"
                loading="lazy"
              />
            </Link>
            {/* Left navigation links */}
            <ul
              className="list-style-none mr-auto flex flex-col pl-0 lg:flex-row"
              data-te-navbar-nav-ref=""
            >
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                {/* Dashboard link */}
                <Link
                  className="text-neutral-500 transition duration-200 hover:text-neutral-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-zinc-400"
                  href="#"
                  data-te-nav-link-ref=""
                  to="/"
                >
                  Dashboard
                </Link>
              </li>
              <li className="mb-4 lg:mb-0 lg:pr-2" data-te-nav-item-ref="">
                <Link
                  className="text-neutral-500 transition duration-200 hover:text-blue-700 hover:ease-in-out focus:text-neutral-700 disabled:text-black/30 motion-reduce:transition-none dark:text-neutral-200 dark:hover:text-neutral-300 dark:focus:text-neutral-300 lg:px-2 [&.active]:text-black/90 dark:[&.active]:text-neutral-400"
                  href="#"
                  data-te-nav-link-ref=""
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>
          {/* Right elements */}
          <div className="relative flex items-center">
            {/* Cart Icon */}

            <div className="relative" data-te-dropdown-ref="">
              {/* Second dropdown trigger */}
              <Link
                className="hidden-arrow flex items-center whitespace-nowrap transition duration-150 ease-in-out motion-reduce:transition-none"
                href="#"
                id="dropdownMenuButton2"
                role="button"
                data-te-dropdown-toggle-ref=""
                aria-expanded="false"
              >
                {/* User avatar */}
                <img
                  src="https://th.bing.com/th/id/OIP.D6HvYAHLVNyPuXlquzNFSwHaHa?pid=ImgDet&rs=1"
                  className="rounded-full"
                  style={{ height: 40, width: 40, mixBlendMode: "multiply" }}
                  alt=""
                  loading="lazy"
                />
              </Link>
            </div>
            <button onClick={handleLogout} class="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-1 px-2 ml-2 border border-gray-400 rounded shadow">
              Logout
            </button>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
