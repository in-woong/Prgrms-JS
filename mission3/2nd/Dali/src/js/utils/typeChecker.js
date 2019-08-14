const Types = {
  Number: "number",
  String: "string",
  Boolean: "boolean",
  Array: "array",
  Object: "object",
  Function: "function",
  Null: "null",
  Undefined: "undefined",
};

const checkType = data => {
  const typeStringStart = 8;
  const typeStringEnd = -1;
  return Object.prototype.toString.call(data).slice(typeStringStart, typeStringEnd).toLowerCase();
};
const isNumber = data => typeof data === Types.Number;
const isString = data => typeof data === Types.String;
const isBoolean = data => typeof data === Types.Boolean;
const isArray = data => Array.isArray(data) === Types.Array;
const isObject = data => checkType(data) === Types.Object;
const isNull = data => checkType(data) === Types.Null;
const isUndefined = data => typeof data  === Types.Undefined;
const isFunction = data => typeof data  === Types.Function;


export default {
  checkType,
  isString,
  isNumber,
  isBoolean,
  isArray,
  isObject,
  isNull,
  isUndefined,
  isFunction,
};
