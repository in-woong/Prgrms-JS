import { newSearchResultError } from '../Error.js';

export default function SearchResult($app) {
  if(!new.target) throw new Error(newSearchResultError);

  const $target = $app.querySelector('#search-result');

  this.state = [];

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
  }

  $target.appendChild(document.createElement('ul'));
}