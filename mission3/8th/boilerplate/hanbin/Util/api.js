const END_POINT = 'https://jjalbot.com/api';

const request = async (url) => {
    try{
        const res = await fetch(url);
        if(res.ok){
            const result = await res.json();
            return result;
        } else {
            throw new Error('something is wrong');
        }
    }
    catch(e){
        throw e;
    }
}

export const fetchJjal = async (keyword) => 
    await request(`${END_POINT}/jjals?text=${keyword}`);

