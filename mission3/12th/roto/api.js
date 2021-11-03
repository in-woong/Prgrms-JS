const END_POINT = 'https://jjalbot.com/api/jjals'

export const request = (url) => {
  return fetch(`${END_POINT}${url}`)
    .then(res => res.json())
    .catch(e => {
      console.log(e)
    })
}