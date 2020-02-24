const BASE_URL = 'https://jjalbot.com/api/jjals?text='

export const fetchImages = async queryString => {
    const response = await fetch(`${BASE_URL}${queryString}`)

    if (!response.ok) {
        throw new Error('server is not available')
    }

    return await response.json()
}
