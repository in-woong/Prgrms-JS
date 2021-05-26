export const api = {
    fecthJJal: (keyword) => {
        return fetch(`https://jjalbot.com/api/jjals?text=${keyword}`)
            .then((res)=> res.json())
            .catch(err=>{
                console.log(`에러메시지${err}`);
            })
    }
}
