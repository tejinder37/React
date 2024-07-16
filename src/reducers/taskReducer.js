export const taskReducer = (tasks, action) => {
  switch (action.type) {
    case "added":
      return [...tasks, { id: action.id, text: action.text, done: false }];
    case "changed":
      return tasks.map((task) =>
        task.id === action.task.id ? action.task : task
      );
    case "deleted":
      return tasks.filter((task) => task.id !== action.id);
    default:
      throw new Error("Unknown action: " + action.type);
  }
};
