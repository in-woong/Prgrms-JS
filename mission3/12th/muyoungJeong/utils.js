export async function getImages(searchKeyword) {
  const response = await fetch(`https://jjalbot.com/api/jjals?text=${searchKeyword}`)
  const result = await response.json()
  const imageUrls = result.filter(item => item.imageUrl).map(item => item.imageUrl)

  return imageUrls
}
