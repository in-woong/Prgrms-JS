const validateData = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('argument is not array')
  }

  data.forEach(item => {
    if (!item) {
      throw new Error('item in argument is undefined')
    }

    if (!item.hasOwnProperty('imageUrl')) {
      throw new Error('imageUrl prop is not exist')
    }
  })
}

const getJalBotByText = async (text) => {
  try {
    const response = await fetch(`https://jjalbot.com/api/jjals?text=${text}`)
    return await response.json()
  } catch (e) {
    throw new Error(e)
  }
}

let timer = null
const debounce = (callback, time) => {
  if (timer) {
    clearTimeout()
  }
  timer = setTimeout(callback, time)
}
