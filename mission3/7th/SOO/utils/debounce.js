let bounce = null
export const debounce = (callback, DELAY_TIME) => {
    if (bounce) {
        clearTimeout(bounce)
    }
    bounce = setTimeout(callback, DELAY_TIME)
}
