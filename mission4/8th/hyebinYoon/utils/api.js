const END_POINT = 'https://todo-api.roto.codes'
const username = 'hyebinYoon'

// 조회
export const fetchData = async () => {
  const res = await fetch(`${END_POINT}/${username}`)
  return await res.json()
}

// 삭제
export const removeData = async (id) => {
  await fetch(`${END_POINT}/${username}/${id}`, {
    method: 'DELETE',
  })
}
// 토글
export const toggleData = async (id) => {
  await fetch(`${END_POINT}/${username}/${id}/toggle`, {
    method: 'PUT',
  })
}
// 추가
export const insertData = async (todoText) => {
  await fetch(`${END_POINT}/${username}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      content: todoText,
    }),
  })
}
