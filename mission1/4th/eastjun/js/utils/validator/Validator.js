class Validator {
  static validate(result, message) {
    if (!result) throw new Error(message)
  }

  static isString(data) {
    return typeof data === 'string' || data instanceof String
  }

  static isNewInstance(instance, originClass) {
    this.validate(instance instanceof originClass, errorMessagesMap.NOT_NEW_INSTANCE)
  }

  static isNotEmptyArray(list) {
    this.validate(Array.isArray(list) && !!list.length, errorMessagesMap.IS_NOT_ARRAY)
  }
}
