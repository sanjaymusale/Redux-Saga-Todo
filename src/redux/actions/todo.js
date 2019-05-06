export const createTodo = todo => {
  return {
    type: "CREATE_TODO",
    todo
  };
};

export const deleteTodo = id => {
  return {
    type: "DELETE_TODO",
    id
  };
};

export const completeTodo = data => {
  return {
    type: "COMPLETE_TODO",
    data
  };
};

export const completeAll = data => {
  console.log("action", data);
  return {
    type: "COMPLETE_ALL",
    data
  };
};
