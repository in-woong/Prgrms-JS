import { errorMessagesMap } from './utils.js'

const ENTER_KEY = 13

const validator = {
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
  isEnterKey(keyCode) {
    return keyCode === ENTER_KEY
  },
}

export default validator
