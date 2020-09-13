export const validateData = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('argument is not array')
  }

  data.forEach((item) => {
    if (!item) {
      throw new Error('item in argument is undefined')
    }

    if (!item.hasOwnProperty('imageUrl')) {
      throw new Error('imageUrl prop is not exist')
    }
  })
}

export const searchWord = async (url, text) => {
  try {
    const response = await await fetch(`${url}/jjals?text=${text}`).then((x) =>
      x.json()
    )
    return response
  } catch (error) {
    throw new Error(error)
  }
}

let timer = null
export const debounce = (callback, timer) => {
  if (timer) {
    clearTimeout()
  }
  timer = setTimeout(callback, timer)
}
