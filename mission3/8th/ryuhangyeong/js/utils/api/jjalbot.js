const END_POINT = 'https://jjalbot.com/api/jjals'

const getListByKeyword = (keyword) => request(`${END_POINT}?text=${keyword}`)
