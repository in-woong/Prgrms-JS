export const checkInstance = (context) => {
    if(context === window) {
        throw new Error("TodoList의 new 키워드가 없습니다");
    }
}

export const checkTarget = ($targetId) => {
    if(!$targetId) {
        throw new Error('target element가 존재하지 않습니다');
    }
}

export const checkDataTypes = (data, checkCallback) => {
    if (!Array.isArray(data)) {
        throw new Error("data가 array 형식이 아닙니다");
    }
    if (!data.every(checkCallback)) {
        throw new Error("data 형식이 올바르지 않습니다");
    }
}
