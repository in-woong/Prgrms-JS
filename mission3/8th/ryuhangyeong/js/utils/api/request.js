const request = async (url, opts = {}) => {
  try {
    const res = await fetch(url, opts)
    const data = await res.json()

    if (!data.length) {
      throw new Error('검색 결과가 존재하지 않습니다.')
    } else {
      return data
    }
  } catch (e) {
    throw e
  }
}
