/**
 * debounce Factory 함수
 * @param {callback} callbackFn
 * @param {number} delay
 */
export function makeDebouncedFn({callbackFn, delay}) {
    let timer;
    return (params) => {
        if (timer) {
            window.clearTimeout(timer);
        }
        timer = window.setTimeout(callbackFn, delay, params);
    };
}
