const Types = {
  Number: 'number',
  String: 'string',
  Boolean: 'boolean',
  Array: 'array',
  Object: 'object',
  Function: 'function',
  Null: 'null',
  Undefined: 'undefined',
}

const checkType = (dataType) => {
  const typeStringStart = 8
  const typeStringEnd = -1
  return Object.prototype.toString
    .call(dataType)
    .slice(typeStringStart, typeStringEnd)
    .toLowerCase()
}
const isNumber = (dataType) => {
  return typeof dataType === Types.Number
}
const isString = (dataType) => {
  return typeof dataType === Types.String
}
const isBoolean = (dataType) => {
  return typeof dataType === Types.Boolean
}
const isArray = (dataType) => {
  return checkType(dataType) === Types.Array
}
const isObject = (dataType) => {
  return checkType(dataType) === Types.Object
}
const isNull = (dataType) => {
  return checkType(dataType) === Types.Null
}
const isUndefined = (dataType) => {
  return checkType(dataType) === Types.Undefined
}
const isFunction = (dataType) => {
  return checkType(dataType) === Types.Function
}

export {
  checkType,
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
  isNull,
  isUndefined,
  isFunction,
}
