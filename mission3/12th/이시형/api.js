
export const getData = async (text) => {
    const res = await (await fetch(`https://jjalbot.com/api/jjals?text=${text}`)).json()
    if(!res) return []
    return res
}
