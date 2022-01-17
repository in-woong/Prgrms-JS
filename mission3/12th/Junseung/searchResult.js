function SearchResult({ $target, initialState }){

    this.$target = $target;
    this.state = initialState;
    
    this.makeComponent = () => {
        // console.log(this.state);
        const htmlImgString = this.state
            .map((stateItem) => {
                return `<img src= ${stateItem.imageUrl}>`
            })
            .join(" ");
        
        return htmlImgString;
    }

    this.setState = (newData) => {
        this.state = newData;
        this.render();
    } 

    this.render = () => {
        this.$target.innerHTML = this.makeComponent();
    }

    // 실행
    this.render();
}

export default SearchResult;