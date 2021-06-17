function SearchInput ({$app,addOnType}){
  
  this.$target = $app;
  const inputWrapper = document.createElement('div');
  inputWrapper.classList.add('input__wrapper');
  const labelInputTag = document.createElement('label');
  labelInputTag.innerHTML = '<h3>움짤 키워드</h3>'
  const inputTag = document.createElement('input');
  inputTag.placeholder = '키워드를 입력해주세요'
  inputTag.classList.add("search__input");
  inputWrapper.appendChild(labelInputTag)
  inputWrapper.appendChild(inputTag)
  this.$target.appendChild(inputWrapper);

  this.setState = ()=>{};
  this.render = () => {};
 
  let debounce = null;
 
  function typeHandler() {
    if(debounce){
      clearTimeout(debounce);
    };
    debounce = setTimeout(()=>{
      if(inputTag.value.trim() == ''){
        inputTag.value = '';
        return
      }
      addOnType(inputTag.value.trim(),inputTag);
    },300);
  };

  inputTag.addEventListener('keyup',typeHandler);
};

export default SearchInput;
