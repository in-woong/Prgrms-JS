import { isArray, isUndefined, isNull } from '../utils/errorCheck.js'

const SET_DEFAULT_PROPERTIES = ['id', 'text', 'isCompleted']

const validator = (data) => {
  if (isNull(data)) throw new Error('ValueError: data is null')

  if (isUndefined(data)) throw new Error('TypeError: data is undefined')

  if (!isArray(data)) throw new Error('TypeError: data is not an array type')

  data.forEach((item, index) => {
    for (let propertyName of SET_DEFAULT_PROPERTIES) {
      if (!item.hasOwnProperty(propertyName)) {
        throw new Error(`index ${index} item has not ${propertyName} property.`)
      }
    }
  })
}

export default validator
