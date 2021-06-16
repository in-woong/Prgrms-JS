export const END_POINT = 'https://jjalbot.com'

export const request = (url, params) => {
  return fetch(`${END_POINT}${url}`, {
    params
  }).then(res => {
    if (res.ok) {
      return res.json()
    } else {
      throw new Error('응답이 올바르지 않수다')
    }
  })
}