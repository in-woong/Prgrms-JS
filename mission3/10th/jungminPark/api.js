const END_POINT = 'https://jjalbot.com/api'

export const request = (url) => {
    return fetch(url)
        .then((res) => {
            if(res.ok) {
                return res.json()
            }
            throw Error('http 호출 중에 문제가 있습니다.')
        .catch((e) => {
            alert(e.message)
        })
        })
}

export const fetchJjal = (keyword) => {
    return request(`${END_POINT}/jjals?text=${keyword}`)

}