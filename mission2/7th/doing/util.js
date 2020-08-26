const validateTag = (tag) => {
  if (!(tag instanceof HTMLElement)) {
    throw new Error('tag를 다시 설정해주세요.')
  }
  return tag
}

export { validateTag }
