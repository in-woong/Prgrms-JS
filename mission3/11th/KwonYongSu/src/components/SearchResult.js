function SearchResult({$app,initialState}){
  
  const resultGridWrapper = document.createElement('ul');
  resultGridWrapper.classList.add('result__grid__wrapper');
  $app.appendChild(resultGridWrapper);
  
  this.$target = resultGridWrapper;
  this.state = initialState;

  this.render = () =>{
    this.$target.innerHTML =this.state.map((item) =>
      `<li class="item__wrapper"><h3>Title : ${item.title}</h3>
      <div class='image__wrapper'><img src="${item.imageUrl}"></div></li>`)
      .join('')
  };

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  }

  this.render();
};

export default SearchResult;
