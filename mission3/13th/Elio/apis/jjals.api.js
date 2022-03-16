const JJALS_URL = 'https://jjalbot.com/api/jjals'

export const getJjals = async (keyword) => {
  try {
    const response = await fetch(`${JJALS_URL}?text=${keyword}`)
    if (!response.ok) {
      // fetch의 경우 http 에러가 발생해도 cathch로 떨어지니 않으므로, ok를 통한 성공하지 않았을 경우에 대한 에러처리
      const message = `error: ${response.status}`
      throw new Error(message)
    }
    return await response.json()
  } catch (e) {
    alert(e.message)
  }
}
