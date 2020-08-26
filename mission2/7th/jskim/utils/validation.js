export const todosValidation = (todos) => {
  if (!todos || todos.some((todo) => !todo || !todo.text)) {
    throw new Error('Invalid Todo value.')
  }
}
