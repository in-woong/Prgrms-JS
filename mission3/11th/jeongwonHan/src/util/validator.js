export const checkUrlPattern = (url) => {
  const regex = /(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/
  if (regex.test(url)) {
    return true
  }
  return false
}
