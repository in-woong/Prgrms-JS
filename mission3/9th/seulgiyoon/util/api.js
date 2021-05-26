const getGifImages = async (keyword) => {
  try {
    const response = await fetch(
      `https://jjalbot.com/api/jjals?text=${keyword}`
    ).then((response) => response.json())
    return response
  } catch (error) {
    throw new Error('검색결과를 불러오지 못했습니다.')
  }
}

export default getGifImages
