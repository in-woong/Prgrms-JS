const END_POINT = 'https://jjalbot.com/api'

export const request = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('http 호출 중에 뭔가 문제가 있음')
    }
    const result = await res.json()
    return result
  } catch (e) {
    alert(e.message)
  }
}

export const fetchJjal = async (keyword) => {
  return await request(`${END_POINT}/jjals?text=${keyword}`)
}
