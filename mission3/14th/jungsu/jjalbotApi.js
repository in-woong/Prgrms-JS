
export const API_ENDPOINT = 'https://jjalbot.com'


export const request = async (url, options) => {
    // return fetch(url, options).then((res) => {
    //     if (response.ok) {
    //         return res.json();
    //     }

    //     throw new Error("API 호출 실패");
    // })

    try {
        const res = await fetch(url, options);

        if (res.ok) {
            return res.json();
        }
    } catch (e) {
        alert(e.message);
    }
}


export async function fetchJjals(searchText) {
    return await request(`${API_ENDPOINT}/api/jjals?text=${searchText}`);
}