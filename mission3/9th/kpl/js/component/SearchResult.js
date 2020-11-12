import { checkTarget, isArrayData } from '../validator/validation.js'

function SearchResult({$app, data}) {
    const $target = document.createElement('div');
    $target.id = 'search-result';
    $app.appendChild($target);

    this.$target = $target;
    this.data = data;
    
    this.validate = () => {
        checkTarget(this.$target.id);
        isArrayData(this.data);
    };

    this.render = () => {
        const resultHtmlString = `${this.data
            .map( resultData => `<img src= "${resultData.imageUrl}">` )
            .join('')}`;
        $target.innerHTML = resultHtmlString;
    };

    this.setState = (nextData) => {
        this.data = nextData;
        this.validate();
        this.render();
    };
}

export default SearchResult
