import SearchResult from './SearchResult.js'
import SearchInput from './SearchInput.js';

export default function App($target) {

    this.$target = $target;
    this.data = '';

    this.updateData = (inputValue) => {
        fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`)
        .then(x => x.json())
        .then(data => {
            console.log(JSON.stringify(data, null, 2));
            const htmlString = `${data
                .map(d => `<img src="${d.imageUrl}">`)
                .join('')}`;
            this.setState(htmlString);     
        })
    }

    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }

    this.render = () => {
        this.searchResult.setState(this.data);
    }

    this.searchInput = new SearchInput(this.$target, this.updateData);
    this.searchResult = new SearchResult(this.data,this.$target);
}
