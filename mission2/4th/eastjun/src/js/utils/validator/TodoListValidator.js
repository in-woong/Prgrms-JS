import Validator from './Validator'
import errorMessagesMap from '../utils'

const TodoListValidator = {
  isValidTodoData(todoItems) {
    const textFieldIsString = todoItems.every(({ text }) => Validator.isString(text))
    Validator.validate(textFieldIsString, errorMessagesMap.INVALID_DATA)
  },
  isValid(instance, TodoListClass, todoItems) {
    Validator.isNewInstance(instance, TodoListClass)
    Validator.isNotEmptyArray(todoItems)
    this.isValidTodoData(todoItems)
  },
}

export default TodoListValidator
