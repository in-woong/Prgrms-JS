export const getJjals = async function(keyword) {
    const res = await fetch(`https://jjalbot.com/api/jjals?text=${keyword}`);
    const result = await res.json();
    return result
}
