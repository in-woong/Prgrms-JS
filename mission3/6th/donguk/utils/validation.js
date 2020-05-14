export const checkSelector = (selector) => {
  const $target = document.querySelector(selector)
  if (!$target) throw new Error('해당 element가 존재하지 않습니다.')
}

export const checkImages = (images) => {
  if (!Array.isArray(images)) throw new Error('images type must be Array')
  if (images.length > 0){
    images.forEach((image) => {
      if (typeof image !== 'string') throw new Error('image element type must be String')
    })
  }
}
