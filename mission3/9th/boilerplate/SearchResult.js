export default function SearchResult ({$app , initialState}){
    this.state = initialState ;

    this.$target = document.createElement('div');
    this.$target.className = 'SearchResult';
    $app.appendChild(this.$target);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }
    this.render = () => {
        const htmlString = `${  this.state
            .map(d => `<img src="${d.imageUrl}">`)
            .join('')}`;
        this.$target.innerHTML = htmlString;  
    }
    this.render();

}