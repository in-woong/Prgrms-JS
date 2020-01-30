class TodoListValidator extends Validator{
  static isValidTodoData(todoItems) {
    const textFieldIsString = todoItems.every(({ text }) => this.isString(text))
    this.validate(textFieldIsString, errorMessagesMap.INVALID_DATA)
  }

  static isValid(instance, TodoListClass, todoItems) {
    this.isNewInstance(instance, TodoListClass)
    this.isNotEmptyArray(todoItems)
    this.isValidTodoData(todoItems)
  }
}
