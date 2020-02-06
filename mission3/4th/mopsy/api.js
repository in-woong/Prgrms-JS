const API_URL = 'https://jjalbot.com/api/';

const fetchImages = async keyword =>  {
    try {
        const result = await fetch(`${API_URL}jjals?text=${keyword}`);
        return await result.json();
    } catch (e) {
        throw new Error(e);
    }
}

export { fetchImages }
