function SearchHistory({$app,initialState,onClick}) {

  const historyWrapper = document.createElement('div');
  historyWrapper.classList.add("history__wrapper");
  $app.appendChild(historyWrapper);

  this.state = initialState;
  
  this.setState = (nextState)=> {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    historyWrapper.innerHTML = this.state.map(item => `<span class="tag__wrapper" data-value="${item}">${item}</span>`).join('');
  };

  this.render();

  function clickHandler(e){
    if(e.target.classList.contains('tag__wrapper')){
      console.log(e.target.dataset.value);
      onClick(e.target.dataset.value);
    }
  }

  historyWrapper.addEventListener('click',clickHandler);
}

export default SearchHistory;
