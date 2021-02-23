import { ERROR_MSG } from './ERROR_MSG.js'

function isNew(target) {
  // 미검증인 경우를 위해 undefined 만 검증
  if (target === undefined) throw new Error(ERROR_MSG.IS_NOT_NEW)
  return true
}

export { isNew }
