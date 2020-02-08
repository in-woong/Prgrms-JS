const domain = 'https://jjalbot.com/api/jjals'

const Api = (() => {
  const request = (uri) => fetch(uri).then((x) => x.json())
  const findItems = (word) => request(`${domain}?text=${word}`)

  return {
    findItems,
  }
})()

export default Api
