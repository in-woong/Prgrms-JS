async function getSearchData (inputData) {
    try {
        const res = await fetch(`https://jjalbot.com/api/jjals?text=${inputData}`)
        const data = await res.json()
        
        return data
    }
    catch (error) {
        throw new Error(error)
    }
}
export default getSearchData
