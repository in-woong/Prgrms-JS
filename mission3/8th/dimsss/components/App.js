import { History, createHistoryView } from './History.js';
import { SearchKeyword, searchKeywordCreateView } from './SearchKeyword.js';
import { SearchResult, searchResultCreateView } from './SearchResult.js';

import get from '../http.js';

const historyElementId = 'history';
const searchKeywordElementId = 'search-keyword';
const searchResultElementId = 'search-result';

export default function App() {
  this.element = document.querySelector('#app');
  
  this.createChildView = () => {
    return `${createHistoryView()}${searchKeywordCreateView()}${searchResultCreateView()}`;
  }

  this.render = () => {
    this.element.innerHTML = this.createChildView();
  }

  this.addEvent = () => {
    let eventId = 0;
    this.element.addEventListener('input', async (e) => {
      if (eventId) {
        clearTimeout(eventId)
      }
      
      if (e.target.id === searchKeywordElementId) {
        eventId = setTimeout( async () => {
          this.setState(await get(e.target.value), e.target.value);
        }, 200);
      }
    });

    this.element.addEventListener('click', async (e) => {
      if (e.target.className === 'serarch-history') {
        this.searchResultComponent.setState(await get(e.target.textContent));
      }
    });
  }

  this.setState = (newState, searchKeyword) => {
    this.searchResultComponent.setState(newState);
    this.historyComponent.setState(searchKeyword);
  }

  this.init = () => {
    this.render();
    this.addEvent();
  }

  this.init();

  this.historyComponent = new History(document.querySelector(`#${historyElementId}`));
  this.searchKeywordComponent = new SearchKeyword(document.querySelector(`#${searchKeywordElementId}`));
  this.searchResultComponent = new SearchResult(document.querySelector(`#${searchResultElementId}`));
}
