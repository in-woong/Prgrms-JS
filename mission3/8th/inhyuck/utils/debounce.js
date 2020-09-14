/**
 * debounce Factory 함수
 * @param callbackFn
 * @param delay
 */
export function getDebounce({callbackFn, delay}) {
    let timer;
    return (params) => {
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(callbackFn, delay, params);
    };
}
