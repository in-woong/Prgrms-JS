const URL = "https://todo-api.roto.codes/";
const URL_NAME = "junseung";

const getApi = async (urlName) => {
    try {
        const response = await fetch(URL + urlName);
        const getApiResult = await response.json();

        return getApiResult;

    } catch (e){
        console.log(e);
    }
}

const insertApi = async ({ param }) => {
    try {
        await fetch(URL + URL_NAME, param);
    } catch(e) {
        console.log(e);
    }
}

const deleteApi = async ({ id, param }) => {
    try {
        await fetch(`${URL}${URL_NAME}/${id}`, param);
    } catch(e) {
        console.log(e);
    }
}

const toggleApi = async ({ id, param }) => {
    try {
        await fetch(`${URL}${URL_NAME}/${id}/toggle`, param);
    } catch(e) {
        console.log(e);
    }
}

const removeAllApi = async ({ param }) => {
    try {
        await fetch(`${URL}${URL_NAME}/all`, param);
    } catch(e) {
        console.log(e);
    }
}

const getUsersApi = async () => {
    try {
        const response = await fetch(`${URL}users`);
        const getApiResult = await response.json();

        return getApiResult;

    } catch (e){
        console.log(e);
    }
}

export {
    getApi,
    insertApi,
    deleteApi,
    toggleApi,
    removeAllApi,
    getUsersApi,
}