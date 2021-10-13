const BASE_URL = 'https://jjalbot.com/api/'

const request = async (url) => {
  try {
    const response = await fetch(`${BASE_URL}${url}`)
    if (!response.ok) throw new Error(response.status)
    return await response.json()
  } catch (err) {
    alert(`Error : ${err}`)
  }
}

const API = {
  getData: (text) => {
    return request(`jjals?text=${text}`)
  },
}

export { API }
