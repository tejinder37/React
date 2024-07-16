export const taskReducerAdvanced = (tasks, action) => {
    switch (action.type) {
      case "added": {
        return [...tasks, {
          id: action.id,
          text: action.text,
          done: false,
          category: action.category,
          images: action.images || []
        }];
      }
      case "changed": {
        return tasks.map(t => {
          if (t.id === action.task.id) {
            return action.task;
          } else {
            return t;
          }
        });
      }
      case "deleted": {
        return tasks.filter(t => t.id !== action.id);
      }
      case "deleteAll": {
        return [];
      }
      case "deleteSelected": {
        return tasks.filter(t => !t.done);
      }
      case "reordered": {
        const result = Array.from(tasks);
        const [reorderedItem] = result.splice(action.source, 1);
        result.splice(action.destination, 0, reorderedItem);
        return result;
      }
      default: {
        throw Error('Unknown action: ' + action.type);
      }
    }
  }