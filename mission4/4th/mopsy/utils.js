import {LOCAL_STORAGE_KEY, ERR_MESSAGE} from './constants.js'

const storage = window.localStorage;

const getLocalData = () => {
    try {
        const localTodoData = storage.getItem(LOCAL_STORAGE_KEY);
        const parsedData = JSON.parse(localTodoData) || [];
        return parsedData;
    } catch {
        return [];
    }
}

const validator = {
    validateInstance: (instance, Type) => {
        if (!(instance instanceof Type)) {
            throw new Error(ERR_MESSAGE.INCORRECT_INSTANCE);
        };
    },
    validateArray: arr => {
        if (!Array.isArray(arr)) {
            throw new Error(ERR_MESSAGE.NOT_AN_ARRAY);
        }
    }
}

const debounce = (callback, delay) => {
    let timer;
    return e => {
        if (timer) {
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            callback(e);
        }, delay);
    }
}

export { getLocalData, validator, debounce };
