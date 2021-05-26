export async function fetchMemes(keyword) {
  const response = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)

  if (!response.ok) {
    throw new Error('api 요청에 문제가 있습니다.')
  }

  return await response.json()
}
