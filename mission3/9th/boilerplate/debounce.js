let timer

export const debounce = (func , delay) => {
    if (timer) {
        clearTimeout(timer)
    }

    setTimeout(func, delay)
}