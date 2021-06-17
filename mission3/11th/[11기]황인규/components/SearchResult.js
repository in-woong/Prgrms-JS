function SearchResult(data, $app){
    this.$state = data;
    this.$app = $app;
    if(!new.target)
        throw new Error(errorMessage.CHECK_NEW_ERROR());

    const searchResult = document.createElement("ul");
    searchResult.setAttribute("class", "search-result");
    this.$app.appendChild(searchResult);

    this.setState = (nextState) => {
        this.$state = nextState;
        this.render(this.$state.data);    
    }

    this.render = (state) => {
        const htmlString = `${state.map(data => 
            `<li class="gif-wrapper">
                ${data.imageUrl ? `<img src="${data.imageUrl}"/>` : `<p>이미지가 없습니다.</p>`}
            </li>
        `).join('')}`
            
        
        searchResult.innerHTML=htmlString;
    }
}
export default SearchResult;