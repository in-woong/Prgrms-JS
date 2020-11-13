export const onFetch = async ({url, inputValue}) => {
    try {
        const response = await fetch(inputValue ? `${url}=${inputValue}` : `${url}`);
        const searchResultData = await response.json();
        return searchResultData;
    } catch (error) {
        console.error(`Error : ${error}`);
    }
}

/**
 * 
 * @param {inputValue, fnc, debounceTime} param
 * 
 */
export const onDebounce = function({inputValue, fetchFunction, delay}) {
    if (this.timer) {
        clearTimeout(this.timer);
    }
    this.timer = setTimeout(() => {
        fetchFunction(inputValue);
    }, delay);
}
