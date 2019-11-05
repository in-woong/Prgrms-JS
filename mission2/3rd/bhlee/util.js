const validateData = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('argument is not array')
  }

  data.forEach(item => {
    if (!item) {
      throw new Error('item in argument is undefined')
    }

    if (!item.hasOwnProperty('text')) {
      throw new Error('item in argument is not include text prop')
    }

    if (!item.hasOwnProperty('isCompleted')) {
      throw new Error('item in argument is not include isCompleted prop')
    }

    if (!item.text) {
      throw new Error('item in argument is not include text prop')
    }

    if (typeof item.text !== 'string') {
      throw new Error('text prop is not string type')
    }
  })
}

const usingId = []

const createRandomValue = () => Math.floor(Math.random() * 999999999999)

const createRandomId = (idPrefix) => {
  const randomValue = createRandomValue()
  const id = `${idPrefix}-${randomValue}`
  if(usingId.indexOf(id) === -1) {
    usingId.push(id)
    return id
  }
  return createRandomId(idPrefix)
}
