const END_POINT = 'https://todo-api.roto.codes'
const username = 'hyebinYoon'

const request = async (url, data) => {
  try {
    const res = await fetch(url, data)
    if (res.ok) {
      if (!data) return await res.json()
    } else {
      throw new Error('fetch error')
    }
  } catch (e) {
    throw e
  }
}

// 조회
export const fetchData = async () => {
  return await request(`${END_POINT}/${username}`)
}

// 삭제
export const removeData = async (id) => {
  await request(`${END_POINT}/${username}/${id}`, {
    method: 'DELETE',
  })
}
// 토글
export const toggleData = async (id) => {
  await request(`${END_POINT}/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}
// 추가
export const insertData = async (todoText) => {
  await request(`${END_POINT}/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
}
