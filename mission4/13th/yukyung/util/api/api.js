const BASE_URL = 'https://todo-api.roto.codes'
const SERVER_ERR_MSG = '⚠ 에러가 발생했습니다.'

const api = {
  get: async (url) => {
    const res = await fetch(`${BASE_URL}${url ? url : ''}`)

    if (!res || !res.ok) {
      throw {
        status: res.status,
        message: SERVER_ERR_MSG,
      }
    }

    return await res.json()
  },
  post: async (url, data) => {
    const res = await fetch(`${BASE_URL}${url ? url : ''}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ content: data }),
    })

    if (!res || !res.ok) {
      throw {
        status: res.status,
        message: SERVER_ERR_MSG,
      }
    }

    return await res.json()
  },
  put: async (url, data) => {
    const res = await fetch(`${BASE_URL}${url ? url : ''}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    })

    if (!res || !res.ok) {
      throw {
        status: res.status,
        message: SERVER_ERR_MSG,
      }
    }

    return await res.json()
  },
  delete: async (url) => {
    const res = await fetch(`${BASE_URL}${url ? url : ''}`, {
      method: 'DELETE',
    })

    if (!res || !res.ok) {
      throw {
        status: res.status,
        message: SERVER_ERR_MSG,
      }
    }

    return await res.json()
  },
}

export default api
