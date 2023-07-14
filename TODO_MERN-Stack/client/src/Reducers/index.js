import { combineReducers } from "redux";
import authReducer from "./authReducer";
import currentUserReducer from "./currentUser";
import todoReducer from "./todos";

export default combineReducers({
  authReducer,
  currentUserReducer,
  todoReducer,
});
