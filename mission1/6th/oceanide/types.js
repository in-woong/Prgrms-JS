const getType = (value) => Object.prototype.toString.call(value).slice(8, -1)
const isNull = (value) => getType(value) === 'Null'
const isUndefined = (value) => getType(value) === 'Undefined'
const isString = (value) => getType(value) === 'String'
const isArray = (value) => getType(value) === 'Array'
const isObject = (value) => getType(value) === 'Object'
