const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [].concat(state).concat(action.todo);

    case "REMOVE_TODO":
      return state.filter(task => {
        return task.id !== action.id;
      });

    case "TASK_COMPLETE_TODO":
      return state.map(task => {
        if (task.id === action.data.id) {
          return { ...task, ...action.data };
        } else {
          return task;
        }
      });
    case "TASK_COMPLETE_All_TODO":
      console.log(action);
      return state.map(task => {
        return { ...task, ...action.data };
      });
    default:
      return state;
  }
};

export default todoReducer;
