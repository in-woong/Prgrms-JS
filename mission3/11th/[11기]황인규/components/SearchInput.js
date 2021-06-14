function SearchInput({$input, onFetchData}){
    this.$input = $input;
    this.onFetchData = onFetchData;

    const onKeyupHandler = (event) => {
        
        if(event.key != 'Enter') return;
        
        if(this.timer){
            clearTimeout(timer);
        }
        this.timer = setTimeout(() => {
            onFetchData(event.target.value);
        },200)
       
    }
    this.$input.addEventListener('keyup', onKeyupHandler);

}
export default SearchInput;
  