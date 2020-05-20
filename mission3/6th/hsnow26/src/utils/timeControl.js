let debounce
const SEARCH_DEBOUNCE_TIME = 500

export const searchDebounce = (getJjalImages, value) => {    
    clearTimeout(debounce);
    debounce = setTimeout(() => {
        getJjalImages(value)
    }, SEARCH_DEBOUNCE_TIME);
}