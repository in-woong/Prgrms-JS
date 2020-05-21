export const searchDebounce = (getJjalImages) => {    
    let debounce 
    const SEARCH_DEBOUNCE_TIME = 500
    
    return (e) => {
        const { target } = e

        if(debounce){
            clearTimeout(debounce);
        }
        
        debounce = setTimeout(() => {
            getJjalImages(target.value)
        }, SEARCH_DEBOUNCE_TIME);
    }
}