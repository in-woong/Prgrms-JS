import SearchResult from './SearchResult.js';
import config from './config.js';
// 우선 searchResult가 render를 잘 하도록
// data는 받아야 될까?

const setView = (({config, SearchResult})=>{
  try {
    const searchResult = new SearchResult({
      data: config.data,
      target: config.target,
      search: config.search
    });
  }catch (error) {
      console.log(error);
  }
})({
  config,
  SearchResult
});

document.addEventListener('DOMContentLoaded', setView);


