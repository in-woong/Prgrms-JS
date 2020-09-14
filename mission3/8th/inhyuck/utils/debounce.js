let timer;

export function debounce({callbackFn, delay}) {
    if (timer) {
        window.clearTimeout(timer);
    }
    timer = window.setTimeout(callbackFn, delay);
}
