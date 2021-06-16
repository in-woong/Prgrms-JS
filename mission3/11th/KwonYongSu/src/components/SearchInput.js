function SearchInput ({$app,addOnType}){

  this.$target = $app;
  const inputTag = document.createElement('input');
  inputTag.classList.add("search__input");
  this.$target.appendChild(inputTag);
  this.setState = ()=>{};
  this.render = () => {};
  let debounce = null;
  function clickHandler(e){
    clearTimeout(debounce);
    debounce = setTimeout(()=>{
      addOnType(e.target.value);
    },400);
  }
  inputTag.addEventListener('keyup',clickHandler);
}

export default SearchInput;
