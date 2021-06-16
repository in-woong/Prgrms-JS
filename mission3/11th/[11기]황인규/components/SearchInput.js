function SearchInput({$app, onFetchData}){
    this.$app = $app;
    const searchInputWrapper = document.createElement("div");
    searchInputWrapper.setAttribute("class", "search-keryword-wapper");

    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "search");
    searchInput.setAttribute("placeholder", "검색어를 입력해주세요.");

    this.$app.appendChild(searchInputWrapper);
    searchInputWrapper.appendChild(searchInput);
    this.onFetchData = onFetchData;
    this.timer = null 


    const onKeyupHandler = (event) => {
        if(event.key != 'Enter') return;
        if(this.timer){
            clearTimeout(this.timer);
        }
        this.timer = setTimeout(() => {
            onFetchData(event.target.value);
        },200)
       
    }
    searchInput.addEventListener('keyup', onKeyupHandler);

}
export default SearchInput;
  