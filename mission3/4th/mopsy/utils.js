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

const validator = {
    typeValidate: (data, type) => {
        const dataType = Array.isArray(data) ? 'array' : typeof data;
        if (dataType === type) return true;
        throw new Error(`data is not ${type}`);
    },
    isArray: data => {
        return validator.typeValidate(data, 'array');
    },
    isObject: data => {
        return validator.typeValidate(data, 'object');
    },
    isNumber: data => {
        return validator.typeValidate(data, 'number');
    },
    isString: data => {
        return validator.typeValidate(data, 'string');
    },
    isFunction: data => {
        return validator.typeValidate(data, 'function');
    },
    isBoolean: data => {
        return validator.typeValidate(data, 'boolean');
    },
    isUndefined: data => {
        return validator.typeValidate(data, 'undefined');
    },
    isNull: data => {
        if (data === null) return true;
        return false;
    },
    isEmpty: data => {
        let type;
        if (Array.isArray(data)) {
            type = 'array';
        } else {
            type = typeof data;
        }
        switch (type) {
            case 'string':
                let str = data;
                if (str.length === 0) return true;
                while (str[str.length - 1] === ' ') {
                    str = str.slice(0, str.length - 1);
                    if (str.length === 0) return true;
                }
                return false;
            case 'array':
                if (data.length === 0) return true;
                return false;
            case 'object' : 
                if (data === null) {
                    throw new Error('data is null');
                }
                if (Object.keys(data).length === 0) return true;
                return false;
            case 'number':
                if (data === undefined) return true;
                return false;
            case 'boolean':
                throw new Error('boolean type is not validatable');
            case 'function': 
                throw new Error('function type is not validatable');
            case 'undefined':
                throw new Error('undefined type is not validatable');
            default: 
                throw new Error('validate fail');
        }
    },
};

export { debounce, validator }
