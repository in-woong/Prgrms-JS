const END_POINT = 'https://jjalbot.com/api/jjals?text='

const dataFetch = (text) => {
  console.log(text)
  return fetch(`${END_POINT}${text}`)
    .then((res) => res.json())
    .catch((e) => {
      console.log(e)
    })
}
export default dataFetch
