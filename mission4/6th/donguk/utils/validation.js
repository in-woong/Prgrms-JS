export const checkSelector = (selector) => {
  const $target = document.querySelector(selector)
  if (!$target) throw new Error("Don't exist DOM Element")
}

export const checkModalContent = (content) => {
  if (!content) throw new Error('empty modal content')
}
