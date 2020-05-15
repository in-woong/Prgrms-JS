let debounce

export const searchDebounce = (getJjalImages, value) => {    
    clearTimeout(debounce);
    debounce = setTimeout(() => {
        getJjalImages(value)
    }, 500);
}