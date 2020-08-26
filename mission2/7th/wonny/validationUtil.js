const validateConstructor = (constructor, object) => {
  if (!(constructor instanceof object)) {
    throw Error('Wrong call!')
  }
}

const isValidProperty = (object, key, type) => {
  return object.hasOwnProperty(key) && typeof object[key] === type
}

const validateTodos = (todos) => {
  if (!todos) {
    throw Error("There aren't todos")
  }

  if (!Array.isArray(todos)) {
    throw Error('Todos is not array')
  }

  if (
    !todos.every(
      (todo) =>
        isValidProperty(todo, 'id', 'string') &&
        isValidProperty(todo, 'text', 'string') &&
        isValidProperty(todo, 'isCompleted', 'boolean')
    )
  ) {
    throw Error('Invalid property')
  }
}
