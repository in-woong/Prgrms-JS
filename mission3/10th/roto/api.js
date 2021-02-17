const END_POINT = 'https://jjalbot.com/api'

// async
// function 문법인 경우는 function 앞에
// arrow function 문법인 경우는 파라메터 선언 앞에

export const request = async (url) => {
  try {
    const res = await fetch(url)
    if (!res.ok) {
      throw Error('http 호출 중에 뭔가 문제가 있는 것 같음')
    }

    const result = await res.json()

    return result
  } catch (e) {
    alert(e.message)
  }
}

export const fetchJjal = async (keyword) => {
  return await request(`${END_POINT}/jjals?text=${keyword}`)
}
