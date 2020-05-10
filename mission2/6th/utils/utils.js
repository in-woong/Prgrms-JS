// Validate Data

function validateData(data) {
  function isValidDataFormat(dataArray) {
    return dataArray.length === 0
      ? false
      : dataArray.every(
          (todo) => todo.hasOwnProperty('text') && typeof todo.text === 'string'
        )
  }

  if (data === null) {
    throw new Error('data is null')
  }
  if (data === undefined) {
    throw new Error('data is undefined')
  }

  if (!Array.isArray(data)) {
    throw new Error('only array type data is permitted')
  }

  if (!isValidDataFormat(data)) {
    throw new Error('data is not valid')
  }

  return data
}

// Update Data

function updateData(newData) {
  this.data.push(...validateData(newData))
}

export { updateData, validateData }
