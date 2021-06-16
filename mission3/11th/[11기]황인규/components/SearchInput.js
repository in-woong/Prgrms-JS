function SearchInput({$app, onFetchData}){
    this.$app = $app;
    console.log(this.$app);
    const searchInput = document.createElement("input");
    searchInput.setAttribute("id","search-keyword");
    this.$app.appendChild(searchInput);
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
  