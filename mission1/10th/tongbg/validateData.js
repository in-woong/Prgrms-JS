import { ERROR_MSG } from './ERROR_MSG.js'

function validateData(target, data) {
  // new 체크 = function 형태의 선언인 경우에만 해당
  isNew(target)

  // null 혹은 undefined - Array.isArray 에서 확인가능
  // isFalsy(data);

  // array가 아닌 형태
  isArray(data)

  // data.text 타입체크
  isCorretType(data, 'text', 'string')

  // data.isCompleted 타입체크
  isCorretType(data, 'isCompleted', 'boolean')

  return true
}

function isNew(target) {
  if (!target) throw new Error(ERROR_MSG.IS_NOT_NEW)
}

function isFalsy(data) {
  if (!data) throw new Error(ERROR_MSG.INCORRECT_DATA)
}

function isArray(data) {
  if (!Array.isArray(data)) throw new Error(ERROR_MSG.IS_NOT_ARRAY)
}

function isCorretType(data, name, type) {
  data.map((item) => {
    if (typeof item[name] !== type) throw new Error(ERROR_MSG.INCORRECT_DATA)
  })
}

export default validateData
