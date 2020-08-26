export function isString(value) {
  if (typeof value !== 'string') throw new Error(`Given value is not string`)
  return true
}

export function isNotEmptyString(value) {
  isString(value)
  if (!value.trim()) throw new Error('Given value is empty string')
  return true
}

export function isBoolean(value) {
  if (typeof value !== 'boolean') throw new Error(`Given value is not boolean`)
  return true
}

export function isArray(value) {
  if (!Array.isArray(value)) throw new Error('Given value is not array')
  return true
}

export function isNotEmpty(value) {
  if (value === null || value === undefined)
    throw new Error('Given value is empty')
  return true
}

export function isNumber(value) {
  if (typeof value !== 'number') throw new Error('Given value is not number')
  return true
}

export function isPositiveNumber(value) {
  isNumber(value)
  if (value <= 0) throw new Error('Given value is not positive number')
  return true
}
