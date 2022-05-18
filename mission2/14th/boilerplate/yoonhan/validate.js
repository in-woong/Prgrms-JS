'use strict';

export function isValidData(data, keyTypeObject) {
  if (Array.isArray(data) && data.every(dataObject => isValidDataObject(dataObject, keyTypeObject))) {
    return true;
  }
  return false;
}

export function isValidDataObject(dataObject, keyTypeObject) {
  const validKeys = Object.keys(keyTypeObject);
  if (
    typeof dataObject === 'object' && 
    !Array.isArray(dataObject) && 
    dataObject !== null &&
    Object.keys(dataObject).every(key => validKeys.includes(key)) &&
    Object.keys(dataObject).every(key => {
      const valueType = keyTypeObject[key];
      const value = dataObject[key];
      return valueType === typeof value;
    })
  ) {
    return true;
  }
  return false;
}
