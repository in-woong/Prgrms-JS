const END_POINT = 'https://jjalbot.com';

const request = async (url) => {
    return await fetch(`${END_POINT}/${url}`)
    .then((res) => {
        if(res.ok){
            return res.json();
        }
        throw new Error('api에 문제가 있다!! ')
    })
    .catch(e => {
        alert(e.message);
    }); 
}

export const fetchJjal = (keyword) =>{
    return request(`/api/jjals?text=${keyword}`)
}

// export const fetchImage = () =>{
//     return request(`/api/images?text=${keyword}`)
// }

// export const fetchUser = () =>{
//     return request(`/api/user?text=${keyword}`)
// }
