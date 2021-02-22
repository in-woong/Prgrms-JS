import { ERROR_MSG } from './ERROR_MSG.js'

function validateData(data) {
  // array가 아닌 형태
  // isArray(data)

  // data.text 타입체크
  isCorretType(data, 'text', 'string')

  // data.isCompleted 타입체크
  isCorretType(data, 'isCompleted', 'boolean')

  return data
}

function isNew(target) {
  // 미검증인 경우를 위해 undefined 만 검증
  if (target === undefined) throw new Error(ERROR_MSG.IS_NOT_NEW)
  return true
}

function isFalsy(data) {
  if (!data) throw new Error(ERROR_MSG.INCORRECT_DATA)
  return true
}

function checkDom(targetDom) {
  if (!targetDom) throw new Error(ERROR_MSG.DOM_NOT_EXIST)
  return targetDom
}

function isArray(data) {
  if (!Array.isArray(data)) throw new Error(ERROR_MSG.IS_NOT_ARRAY)
  return true
}

function isCorretType(data, name, type) {
  data.forEach((item) => {
    if (typeof item[name] !== type) throw new Error(ERROR_MSG.INCORRECT_DATA)
  })
}

function raiseEexcetion(msg) {
  throw new Error(msg)
}

export default validateData
export { checkDom, isNew, isFalsy, raiseEexcetion }
