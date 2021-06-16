function SearchInput ({$app,addOnType}){

  this.$target = $app;
  const inputTag = document.createElement('input');
  inputTag.classList.add("search__input");
  this.$target.appendChild(inputTag);

  this.setState = ()=>{};
  this.render = () => {};
 
  let debounce = null;
 
  const typeHandler = () =>{
    if(debounce){
      clearTimeout(debounce);
    };
    debounce = setTimeout(()=>{
      if(inputTag.value.trim() == ''){
        inputTag.value = '';
        return
      }
      addOnType(inputTag.value.trim(),inputTag);
    },400);
  };

  inputTag.addEventListener('keyup',typeHandler);
};

export default SearchInput;
