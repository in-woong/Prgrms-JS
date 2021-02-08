const ENTERKEY = 13;

class SearchKeyword {
    constructor(selector,onSearchHandler) {
        this.target = document.querySelector(selector);
        this.target.focus();

        this.target.addEventListener('keyup',(e)=> {
            if(e.keyCode === ENTERKEY) {
                onSearchHandler(e.target.value);
                e.target.value = '';
            }
        })
    }

    validation = () => {

    }

    setState = () => {

    }

    render = () => {

    }
};

export default SearchKeyword;