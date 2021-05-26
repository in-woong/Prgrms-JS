// API 호출 및 검색어 히스토리 저장
const END_POINT = 'https://jjalbot.com/api'

const getImage = async (searchStr) => {
  const response = await fetch(`${END_POINT}/jjals?text=${searchStr}`)

  if (response.ok) {
    try {
      const jsonData = await response.json()
      return jsonData
    } catch {
      throw new Error(ERROR_MSG.JSON_PARSE_ERROR)
    }
  }

  throw new Error(ERROR_MSG.NETWORK_NOT_OK)
}

export { getImage }
