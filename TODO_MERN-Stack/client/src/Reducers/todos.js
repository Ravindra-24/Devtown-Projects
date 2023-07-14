const todoReducer = (state = { data: null }, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return { ...state };
    case "FETCH_ALL_TODOS":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export default todoReducer;