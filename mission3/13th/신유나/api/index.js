const baseURL = 'https://jjalbot.com/api'

function request(url) {
  return fetch(`${baseURL}${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error('🚨API 에러🚨')
      }
      return response.json()
    })
    .catch((error) => {
      throw new Error(error, '서버 에러🚨')
    })
}

export const API = {
  searchJJal: (keyword) => request(`/jjals?text=${keyword}`),
}
