const API_URL = 'https://jjalbot.com/api/'
export const getImgData = async keyword => {
  if (keyword === '') return []
  const result = await fetch(`${API_URL}jjals?text=${keyword}`)
  if (result.status !== 200) throw new Error('데이터가 로드되지 않았습니다.')
  const data = await result.json()
  console.log(JSON.stringify(data, null, 2))
  return data
}
