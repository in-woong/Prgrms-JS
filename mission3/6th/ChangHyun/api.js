const JJALBOT_URL = 'https://jjalbot.com/api/jjals'

const getJJALImgs = async (query) =>
  await fetch(`${JJALBOT_URL}?text=${query}`).then((res) => {
    console.log(res)
    return res.json()
  })

export default getJJALImgs
