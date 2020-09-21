// function debounce(cb, time) {
//     let timer;
//     if (timer) {
//         clearTimeout(timer);
//     }
//     timer = setTimeout(cb, time);
// }
// export default debounce;


function debounce(targetFunction, debounceTime) {
    let timeoutId = null;

    return (...args) => {
        if (timeoutId) {
            return
        }

        timeoutId = setTimeout(() => {
            clearTimeout(timeoutId)
            timeoutId = null

            return targetFunction(...args)
        }, debounceTime)
    }
}

export default debounce;
