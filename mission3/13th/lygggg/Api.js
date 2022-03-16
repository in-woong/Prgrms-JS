export const IMAGE_API_URL = `https://jjalbot.com/api/jjals?text=`

export function getImage(value) {
  return fetch(`${IMAGE_API_URL}${value}`)
    .then((res) => res.json())
    .catch((e) => {
      alert(e)
    })
}
