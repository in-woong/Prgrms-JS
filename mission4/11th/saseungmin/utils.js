export const toggleTodo = (todos, id) => todos.map((todo) => {
  const { _id, isCompleted } = todo;

  if (id === _id) {
    return {
      ...todo,
      isCompleted: !isCompleted,
    };
  }

  return todo;
});

export const deleteTodo = (todos, id) => todos.filter(({ _id }) => (id !== _id));
