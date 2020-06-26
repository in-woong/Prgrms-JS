export const createDom = (tag, attribute = undefined) => {
  const $newDom = document.createElement(tag)
  attribute &&
    Object.keys(attribute).forEach((attr) =>
      $newDom.setAttribute(attr, attribute[attr])
    )
  return $newDom
}
