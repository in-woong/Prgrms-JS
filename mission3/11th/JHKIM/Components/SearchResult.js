export default class SearchResult {
    constructor({ $app, initialState }) {
        this.$target = document.createElement('div');
        
        this.state = initialState;

        $app.appendChild(this.$target);
        
        this.render();

    }
    
    render(){
        this.$target.innerHTML = `${this.state.map(d => `<img src="${d.imageUrl}">`).join('')}`;
    }
    
    setState(newState){
        this.state = newState;
        
        this.render();
    }

}
