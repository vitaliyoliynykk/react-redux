const initialState = [{ id: 0, text: "Todo", completed: false }];

function nextTodoId(todos) {
  const maxId = todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1);
  return maxId + 1;
}

export default function todosReducer(state = initialState, action) {
  switch (action.type) {
    case "todos/todosAdded":
      return [
        ...state,
        { id: nextTodoId(state.todos), text: action.payload, completed: false },
      ];
    case "todos/todoToggled":
      return todos.map((todo) => {
        if (todo.id !== action.payload) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed,
        };
      });
    default:
      return state;
  }
}
