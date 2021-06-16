export const END_POINT = 'https://jjalbot.com'

export const request = async (url, params) => {
  const res = await fetch(`${END_POINT}${url}`, {
    params
  })

  if (res.ok) {
    return await res.json()
  } else {
    throw new Error('응답이 올바르지 않수다')
  }
}