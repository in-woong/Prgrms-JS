export const debounce = (callback, debounceTime) => {
    let timer = null

    return (...args) => {
        const delayedCallback = () => {
            clearTimeout(timer)
            timer = null
            return callback(...args)
        }

        if (timer) {
            return
        }

        timer = setTimeout(delayedCallback, debounceTime)
    }
}
