function SearchHistory({$app,initialState,onClick}) {

  const historyWrapper = document.createElement('ul');
  historyWrapper.classList.add("history__wrapper");
  $app.appendChild(historyWrapper);

  this.state = initialState;
  
  this.setState = (nextState)=> {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    historyWrapper.innerHTML = this.state.map(item => `<li class="tag__wrapper" data-value="${item}">${item}</li>`).join('');
  };


  function clickHandler(e){
    if(e.target.classList.contains('tag__wrapper')){
      onClick(e.target.dataset.value);
    }
  }

  historyWrapper.addEventListener('click',clickHandler);

  this.render();
}

export default SearchHistory;
