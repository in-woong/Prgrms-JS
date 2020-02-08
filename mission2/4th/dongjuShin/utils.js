const storage = window.localStorage;

const getLocalData = () => {
    try {
        const localTodoData = storage.getItem(LOCAL_STORAGE_KEY);
        const parsedData = JSON.parse(localTodoData);
        return parsedData;
    } catch {
        return [];
    }
}

const err = msg => {
    throw new Error(msg);
}

const validator = {
    validateInstance: (instance, Type) => {
        if (!(instance instanceof Type)) {
            err(ERR_MESSAGE.INCORRECT_INSTANCE);
        };
    },
    validateArray: arr => {
        if (!Array.isArray(arr)) {
            err(ERR_MESSAGE.NOT_AN_ARRAY);
        }
    }
}
