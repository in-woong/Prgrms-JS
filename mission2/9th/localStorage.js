export const getItem = (key, defaultValue) => {
    try{
        const storedValue = window.localStorage.getItem(key)

        return storedValue ? JSON.parse(storedValue) : dafaultValue
    } catch(e) {
        console.log(e.message)
        return defaultValue
    }
}

export const setItem = (key, value) => {
    try{
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch(e){
        console.log(e.message)
    }
}