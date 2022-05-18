import { newSearchHistoryError } from '../Error.js';

export default function SearchHistory($app, initialState) {
  if(!new.target) throw new Error(newSearchHistoryError);

  const $target = $app.querySelector('#search-history');

  this.state = initialState;

  this.setState = (newState) => {
    this.state = newState;
    this.render();
  }

  this.render = () => {
    const ul = $target.querySelector('ul');
    while(ul.hasChildNodes()) {ul.removeChild(ul.firstChild);}
    for(const imageTag of this.state) {
      const li = document.createElement('li');
      li.innerHTML = imageTag;
      ul.appendChild(li);
    }
    ul.addEventListener('click', historyClick);
  }

  function historyClick(event) {
    const keyword = event.target.innerText;
    $app.dispatchEvent(new CustomEvent('SearchKeywordEvent', {detail: keyword}));
  }

  $target.appendChild(document.createElement('ul'));
  this.render();
}