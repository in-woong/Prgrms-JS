export const isNull = (value) => {
  return value === null
}

export const isUndefined = (value) => {
  return !value
}

export const isArray = (value) => {
  return Array.isArray(value)
}
