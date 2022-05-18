export default function SearchResult({$target, initialState}){
    this.state = initialState;
    this.$result = document.createElement('ul');
    this.$result.className = "search-result-list";
    
    $target.appendChild(this.$result);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        this.$result.innerHTML = this.state.map(data => {
            return `<li><img src="${data.imageUrl}" alt="${data.title}"></li>`
            }).join('');
    }
};