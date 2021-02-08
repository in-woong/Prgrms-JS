export const getItem = (key, defaultValue) => {
    try {
        const storedValue = window.localStorage.getItem(key)

        return storedValue ? JSON.parse(storedValue) : defaultValue
    } catch {
        return defaultValue
    }
}

export const setItem = (key, value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    } catch (error) {
        console.log(error.message)
    }
}
