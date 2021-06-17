function SearchInput({$app, onFetchData}){
    this.$app = $app;
    const searchInputWrapper = document.createElement("div");
    searchInputWrapper.setAttribute("class", "search-keryword-wapper");

    if(!new.target)
        throw new Error(errorMessage.CHECK_NEW_ERROR());

    
    const searchInput = document.createElement("input");
    searchInput.setAttribute("type", "search");
    searchInput.setAttribute("placeholder", "검색어를 입력해주세요.");

    this.$app.appendChild(searchInputWrapper);
    searchInputWrapper.appendChild(searchInput);
    this.onFetchData = onFetchData;


    const onKeyupHandler = (event) => {

        
        onFetchData(event.target.value);
    }
    
    searchInput.addEventListener('input', onKeyupHandler);

}
export default SearchInput;
  