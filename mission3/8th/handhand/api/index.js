const fetchImageData = async (keyword) => {
  const response = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
  if (!response.ok) throw new Error('api 요청 에러 발생')
  const imageData = await response.json()
  return imageData
}

export { fetchImageData }
