import {getData, setData} from "../store/store";
import {SearchResult} from './SearchResult';

const addEvent = () => {
  document.querySelector('#search-keyword').addEventListener('keyup', (e) => {
      let request;
      if (request) {
          clearTimeout(request);
      }

    request = setTimeout(() => {
        loadData(e.target.value);
      }, 200);
  });
}

const loadData = async (input) => {
  const result = await fetch(`https://jjalbot.com/api/jjals?text=${input}`);
  const data = await result.json();

  setData(data);

  // data 바뀔 때 새로 랜더링
  const searchResult = new SearchResult('#search-result', getData);
  searchResult.setState(getData);
};

export function SearchKeyword() {
  addEvent();
}