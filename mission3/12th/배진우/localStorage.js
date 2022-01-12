export const getItem = (key, defaultValue) => {
    try {
        storedValue = localStorage.getItem(key)
        return storedValue ? JSON.parse(storedValue) : defaultValue;
    } catch {
        return defaultValue;
    }
}

export const setItem = (key, value) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
    } catch {
        alert('데이터 추가 실패. 데이터의 양을 확인하세요');
    }
}

export const removeItem = key => {
    try {
        localStorage.removeItem(key);
    } catch {
        alert('데이터 삭제 실패. 데이터명을 정확히 확인하세요');
    }
}

export const clear = () => {
    localStorage.clear();
}

export default {
    getItem,
    setItem,
    removeItem,
    clear
}