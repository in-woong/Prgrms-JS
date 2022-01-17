const END_POINT = 'https://todo-api.roto.codes/:';

export const request = ({ username, url, method }) => {

    switch (method) {
        case 'get':
            return fetch(`${END_POINT}${username}${url}`)
                .then(res => res.json())
                .then(res => console.log(res))
                .catch(e => {
                    console.log(e)
                })
        case 'post':
            return
    }
}