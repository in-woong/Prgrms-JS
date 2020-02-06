import errorMessagesMap from '../utils'

const Validator = {
  validate(result, message) {
    if (!result) throw new Error(message)
  },
  isString(data) {
    return typeof data === 'string' || data instanceof String
  },
  isNewInstance(instance, originClass) {
    this.validate(instance instanceof originClass, errorMessagesMap.NOT_NEW_INSTANCE)
  },
  isNotEmptyArray(list) {
    this.validate(Array.isArray(list) && !!list.length, errorMessagesMap.IS_NOT_ARRAY)
  },
}

export default Validator
