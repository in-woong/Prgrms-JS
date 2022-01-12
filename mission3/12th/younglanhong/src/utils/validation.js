import { errorMsg } from '../assets/errorMsg.js'

const validateItem = (item) => {
  if(!item || !(typeof item === 'object')) return false

  return (
    item.hasOwnProperty('imageUrl') &&
    typeof item.imageUrl === 'string' &&
    item.imageUrl.length > 0
  )
}

const validateData = (data) => {
  if(!data || !data.length) throw new Error(errorMsg.invalidData)
  if(!Array.isArray(data)) throw new Error(errorMsg.invalidDataType)

  data.forEach(item => {
    if(!validateItem(item)) {
      throw new Error(errorMsg.invalidData)
    }
  })
  return true
}

export const checkDataError = (data) => {
  let dataChecked = data
  try {
    validateData(data)
  } catch(err) {
    console.error(err)
    dataChecked = ''
  }
  return dataChecked
}

export const validateInstance = (obj, fn) => {
  if(!(obj instanceof fn)) {
    throw new Error(errorMsg.invalidInstance)
  }
}

export const validateUrl = (url) => {
  if(!url) return

  const testProtocol = /^(http|https)/g.test(url)
  const testImage = /(.gif|.jpg|.jpeg|.bmp|.png|.svg)$/g.test(url)
  const urlTest = testProtocol && testImage

  try {
    if(!urlTest) {
      throw new Error(errorMsg.invalidUrl)
    } 
    return urlTest
  } catch(err) {
    console.error(err)
  } 
}

export const isEmptyArray = (array) => {
  return (Array.isArray(array) && array.length) ? false : true
}
