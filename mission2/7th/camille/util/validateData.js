/**
 * ValidateData util
 * @param todoList
 */
const validateData = function(todoList) {
  // Check undefined, null
  if (!todoList) {
    throw new Error('No data!')
  }

  // Check array
  if (!Array.isArray(todoList)) {
    throw new Error('Not an array')
  }

  // Data object property check
  if (
    !todoList.every((todoList) => todoList.hasOwnProperty('text')) && todoList.hasOwnProperty('isComplete')
  ) {
    throw new Error('Wrong property or data type')
  }

  // Data object property data type check
  todoList.forEach((v) => {
    const { text, isComplete } = v

    if (typeof text !== 'string') {
      throw new Error('Warning : text property is not a string!')
    }

    if (typeof isComplete !== 'boolean') {
      throw new Error('Warning : isComplete property is not a boolean')
    }
  })
}
