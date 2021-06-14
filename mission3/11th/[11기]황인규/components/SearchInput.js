function SearchInput({$input, onFetchData}){
    this.$input = $input;
    this.onFetchData = onFetchData;

    const onKeyupHandler = (event) => {
        
        if(event.key != 'Enter') return;
        onFetchData(event.target.value);
    }
    this.$input.addEventListener('keyup', onKeyupHandler);

}
export default SearchInput;
  