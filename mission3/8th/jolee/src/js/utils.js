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

export const serachJjals = async (url, text) => {
  try {
    const response = await fetch(`${url}/jjals?text=${text}`).then(function (
      response
    ) {
      if (response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok.')
    })
    return response
  } catch (error) {
    throw new Error(error)
  }
}

let timer = null
export const debounce = (callback, debounceMs) => {
  if(timer !== null) {
    clearTimeout(timer)
  }
  timer = setTimeout(callback, debounceMs)
}
