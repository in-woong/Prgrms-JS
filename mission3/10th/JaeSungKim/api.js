const END_POINT = 'https://jjalbot.com/api'

const fetchImages = async (newInput) => {
  return await fetch(`${END_POINT}/jjals?text=${newInput}`)
    .then((response) => {
      if (response.ok) {
        return response.json()
      }
      throw new Error('API 요청 오류')
    })
    .catch((error) => {
      console.error(error)
    })
}

export default fetchImages
