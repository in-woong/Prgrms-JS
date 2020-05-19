let timer = null

export default function debounce(callback) {
    const DEBOUNCE_TIME = 500

    if (timer) {
        clearTimeout(timer)
    }

    timer = setTimeout(function () {
        callback()
    }, DEBOUNCE_TIME)
}
