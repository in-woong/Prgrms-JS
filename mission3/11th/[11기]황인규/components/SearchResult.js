
function SearchResult(data, $target){
    
    this.state = data;
    this.setState = (nextState) => {
        this.state = nextState;
        this.render();    
    }

    this.render = () => {
        $target.innerHTML=this.state;
    }
}
export default SearchResult;