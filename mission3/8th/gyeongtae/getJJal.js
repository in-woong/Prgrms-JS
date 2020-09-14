// 짤봇 api를 통해 짤 데이터를 가져옴
export async function getJJal(value) {
  return await (
    await fetch(`https://jjalbot.com/api/jjals?text=${value}`)
  ).json()
}
