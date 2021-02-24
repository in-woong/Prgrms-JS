validateData = (todoData) => {
  if (!todoData) {
    throw new Error('Data is null or undefined')
  }
  if (!Array.isArray(todoData)) {
    throw new Error('Data is not an Array')
  }
  if (todoData.some((item) => !item)) {
    throw new Error('Data is not available')
  }
  if (todoData.some((item) => !item || typeof item.text !== 'string' || typeof item.isCompleted !== 'boolean')) {
    throw new Error('Data format is not supported')
  }
}

export default validateData
