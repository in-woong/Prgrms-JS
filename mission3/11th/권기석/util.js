let timer = null
export const debounce = (callback, time) => {
  if (timer) {
    clearTimeout()
  }
  timer = setTimeout(callback, time)
}

export const validate = (data) => {
  if (!Array.isArray(data)) {
    throw new Error('배열이 아님')
  }

  data.forEach((item) => {
    if (!item) {
      throw new Error('빈 아이템')
    }

    if (!item.hasOwnProperty('imageUrl')) {
      throw new Error('이미지 없음')
    }
  })
}
