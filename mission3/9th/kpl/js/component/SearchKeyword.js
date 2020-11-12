import { checkTarget, isArrayData } from '../validator/validation.js'

function SearchKeyword({$app, onSearchResult}) {
    const $target = document.createElement('input');
    $target.id = 'search-keyword';
    $app.appendChild($target);

    this.$target = $target;
    this.onSearchResult = onSearchResult;
    this.validate = () => {
        checkTarget(this.$target.id);
    };
    this.fetchData = async (inputValue) => {
        try {
            const response = await fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`);
            const searchResultData = await response.json();
            this.searchResultData = searchResultData;
            isArrayData(this.searchResultData);
            onSearchResult(this.searchResultData);
        } catch (error) {
            console.error(`Error : ${error}`);
        }
    };
    this.initEvent = () => {
        let timer;
        this.$target.addEventListener('keyup', (event) => {
            const { value } = event.target;
            if (value) {
                if (timer) {
                    clearTimeout(timer);
                }
                timer = setTimeout(() => {
                    this.fetchData(value);
                }, 500);
            }
        });
    };
    
    this.validate();
    this.initEvent();
}

export default SearchKeyword
