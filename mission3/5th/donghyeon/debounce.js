const INTERVAL_MS = 300

export const debounce = (callback) => {
    let timer

    return (...args) => {
        clearTimeout(timer)
        timer = setTimeout(() => callback(...args), INTERVAL_MS)
    }
}
