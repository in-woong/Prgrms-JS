const keyTypeObject = {
  text: `string`,
  isCompleted: `boolean`,
  key: 'number',
};

export function checkData(data) {
  if (
    !!data &&
    typeof data === 'object' &&
    checkProperty(data, keyTypeObject)
  ) {
    return true;
  }
  return false;
}

function checkProperty(object) {
  const keys = Object.keys(keyTypeObject);
  return keys.every((property) => {
    if (
      object.hasOwnProperty(property) &&
      typeof object[property] === keyTypeObject[property] &&
      object[property] !== ''
    ) {
      return true;
    }
    return false;
  });
}
