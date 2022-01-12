import { errorMsg } from '../assets/errorMsg.js'

const validateTodoItems = (item) => {
  if (!item || !(typeof item === 'object')) return false
  return (
    item.hasOwnProperty('text') &&
    item.hasOwnProperty('isCompleted') &&
    typeof item.text === 'string' &&
    item.text.length > 0 &&
    typeof item.isCompleted === 'boolean'
  )
}

const validateData = (data, selector) => {
  if (!data || !data.length) throw new Error(errorMsg.invalidData)
  if (!Array.isArray(data)) throw new Error(errorMsg.invalidDataType)
  data.forEach((item) => {
    if (!validateTodoItems(item)) throw new Error(errorMsg.invalidData)
  })
  return true
}

export const validateInstance = (obj, fn) => {
  if (!(obj instanceof fn))
    throw new Error(errorMsg.invalidInstance)
}

export const checkDataError = (data) => {
  let dataChecked = data
  try {
    validateData(data)
  } catch (err) {
    console.error(err)
    dataChecked = ''
  }
  return dataChecked
}
