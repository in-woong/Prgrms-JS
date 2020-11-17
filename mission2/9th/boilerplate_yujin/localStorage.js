//localStorage를 직접 제어하면 안되고 이런식으로
// get,set -> try catch 로 감싸야함. 

export const getItem = (key, defaultValue) => {
    try {
        const storedValue = window.localStorage.getItem(key);

        return storedValue ? JSON.parse(storedValue) : defaultValue
    } catch (e) {
        console.log(e.message)
        return defaultValue;
    }
}
export const setItem = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
        // window.localStorage.clear(); //상황에 따라
        console.log(e.message)
    }
}