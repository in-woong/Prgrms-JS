import { LANG } from './utils.js'

const ERROR_KEY = {
  ERROR001: 'ERROR001',
  ERROR002: 'ERROR002',
  ERROR003: 'ERROR003',
  ERROR004: 'ERROR004',
  ERROR005: 'ERROR005',
  ERROR006: 'ERROR006',
  ERROR007: 'ERROR007',
  ERROR008: 'ERROR008',
  ERROR009: 'ERROR009',
  ERROR010: 'ERROR010',
  ERROR011: 'ERROR011'
}

const ERROR_MESSAGE = {
  IS_NOT_USE_NEW: {
    en: 'You didn\'t use the "new" keyword!',
    ko: 'new 키워드를 사용하지 않았습니다!',
  },
  IS_NULL_OR_UNDEFINED: {
    en: 'The data must not be null or undefined!',
    ko: '데이터는 null 혹은 undefined가 아니어야합니다!'
  },
  IS_NOT_ARRAY: {
    en: 'The data must be an Array.',
    ko: '데이터는 Array 여야 합니다.',
  },
  IS_NOT_AVAILABLE_DATA: {
    en: 'Check the value inside the array.',
    ko: '배열 내부의 값을 확인해주세요.',
  },
  IS_NOT_AVAILABLE_ELEMENT: {
    en: 'Element does not exist. Check the element query.',
    ko: '존재하지 않는 요소입니다. 엘리먼트 쿼리를 확인해주세요.',
  },
}

const throwError = (errKey, errMessageObj) => {
  const err = ERROR_KEY[errKey]
  const errMessage = errMessageObj[LANG]
  throw new Error(`${err} : ${errMessage}`)
}

export { ERROR_KEY, ERROR_MESSAGE, throwError }