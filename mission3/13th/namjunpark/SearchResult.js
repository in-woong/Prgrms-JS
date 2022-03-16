function SearchResult({ $target, initialState }) {
  this.state = initialState;
  const ul = document.createElement('ul');
  $target.appendChild(ul);

  this.setState = (nextState) => {
    this.state = nextState;
    this.render();
  };

  this.render = () => {
    ul.innerHTML = ` 
    ${this.state
      .map(({ imageUrl, title, tags }) => {
        return `<li class="result-li">
        <div><img src=${imageUrl} ></div>
        <div class="result-title">${title}</div>
        ${tags.map((el) => `<span class="result-div">${el}</span>`).join('')}
        </li>`;
      })
      .join('')}`;
  };

  this.render();
}

export default SearchResult;
