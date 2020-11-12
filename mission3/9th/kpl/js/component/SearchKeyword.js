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
    this.initEvent = () => {
        this.$target.addEventListener('keyup', (event) => {
            const { value } = event.target;
            if (value) {
                fetch(`https://jjalbot.com/api/jjals?text=${value}`)
                .then(x => x.json())
                .then(data => {
                    this.data = data;
                    isArrayData(this.data);
                    onSearchResult(this.data);
                })
                .catch(error => console.error(`Error : ${error}`));
            }
        });
    };
    
    

    this.validate();
    this.initEvent();
}

export default SearchKeyword
