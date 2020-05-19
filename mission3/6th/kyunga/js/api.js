export default async function getData(text) {
    try {
        const res = await fetch(`https://jjalbot.com/api/jjals?text=${text}`)
        const data = await res.json()

        return data
    } catch (e) {
        console.log('데이터 로드 실패: ' + e);
    }
}
