export const checkNewKeyword = (targetConstructor) => {
  if (!targetConstructor) {
    throw new Error('new 키워드가 없습니다.')
  }
}

export const checkElementId = (elementId) => {
  const $element = document.getElementById(elementId)

  if (!$element) {
    throw new Error(`문서 내에 id가 ${elementId}인 요소가 존재하지 않습니다.`)
  }

  return $element
}
