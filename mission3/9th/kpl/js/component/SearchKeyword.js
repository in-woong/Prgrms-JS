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
            const data = await response.json();
            this.data = data;
            isArrayData(this.data);
            onSearchResult(this.data);
        } catch (error) {
            console.error(`Error : ${error}`);
        }
    };
    this.initEvent = () => {
        this.$target.addEventListener('keyup', (event) => {
            const { value } = event.target;
            if (value) {
                this.fetchData(value);
            }
        });
    };
    
    this.validate();
    this.initEvent();
}

export default SearchKeyword
