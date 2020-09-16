const END_POINT = 'https://jjalbot.com/api'

const request = async (url) => {
  try {
    const res = await fetch(url)

    if (res.ok) {
      return await res.json()
    } else {
      throw new Error('뭔가 잘못 되었습니다!')
    }
  } catch (e) {
    throw e
  }
}

export const fetchJjal = async (keyword) =>
  await request(`${END_POINT}/jjals?text=${keyword}`)
