function SearchInput ({$app,addOnType}){

  this.$target = $app;
  const inputTag = document.createElement('input');
  inputTag.classList.add("search__input");
  this.$target.appendChild(inputTag);

  this.setState = ()=>{};
  this.render = () => {};

  function clickHandler(e){
    addOnType(e.target.value);
  }
  inputTag.addEventListener('keyup',clickHandler);
}

export default SearchInput;
