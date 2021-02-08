class SearchKeyword {
    constructor(selector,onSearchHandler) {

        let timer = null;
        this.target = document.querySelector(selector);
        this.target.focus();

        this.target.addEventListener('input',(e)=> {
            if (timer) {
                clearTimeout(timer);
            }
            timer = setTimeout(function() {
                onSearchHandler(e.target.value);
                e.target.value = '';              
            }, 200);
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