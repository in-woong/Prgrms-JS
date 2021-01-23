import { ERROR_MSG } from './ERROR_MSG.js'

/**
 * 여러가지 유효성을 검사하는 함수
 * @param {new.target} target new.target 을 파라미터로 받는다.
 * @param {object} data 유효성을 검사할 대상 데이터
 */
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

/**
 * new 연산자를 사용 여부를 검사하는 함수
 * @param {new.target} target new.target 을 파라미터로 받는다.
 */
function isNew(target) {
  // 미검증인 경우를 위해 undefined 만 검증
  if (target === undefined) throw new Error(ERROR_MSG.IS_NOT_NEW)
}

/**
 * falsy 한 값인지 검사하는 함수
 * @param {object} data 유효성을 검사할 대상 데이터
 */
function isFalsy(data) {
  if (!data) throw new Error(ERROR_MSG.INCORRECT_DATA)
}

/**
 * 데이터가 배열 인지 검사하는 함수
 * @param {object} data 유효성을 검사할 대상 데이터
 */
function isArray(data) {
  if (!Array.isArray(data)) throw new Error(ERROR_MSG.IS_NOT_ARRAY)
}

/**
 * 데이터의 타입을 검사하는 함수
 * @param {object} data 유효성을 검사할 대상 데이터
 * @param {string} name 검사할 프로퍼티 key값
 * @param {string} type 검증할 데이터 타입
 */
function isCorretType(data, name, type) {
  data.map((item) => {
    if (typeof item[name] !== type) throw new Error(ERROR_MSG.INCORRECT_DATA)
  })
}

export default validateData
