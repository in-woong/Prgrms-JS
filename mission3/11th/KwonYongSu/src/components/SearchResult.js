function SearchResult($app,dataArray){
  
  const resultGridWrapper = document.createElement('div');
  resultGridWrapper.classList.add('result__grid__wrapper');
  $app.appendChild(resultGridWrapper);
  this.$target = resultGridWrapper;
  this.state = dataArray;
  console.log(this.state)
  this.render = () =>{
    this.$target.innerHTML =this.state.map((item) => 
      `<div class="grid__item"><div>Title : ${item.title}</div>
      <div><img src="${item.imageUrl}"></div></div>`)
      .join('')
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render();
};

export default SearchResult;