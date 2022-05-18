import { debounce, useState } from './modules/utils.js';
import { getImages } from './modules/model.js';
import SearchHistory from './modules/SearchHistory.js';
import SearchInput from './modules/SearchInput.js';
import SearchResult from './modules/SearchResult.js';

function App($target) {
  const state = new useState({
    history: [],
    result: [],
  });

  const setImages = async query => {
    if (!query) return;
    const { history } = state.getState();
    const result = (await getImages(query)) || [];

    state.setState({
      result,
      history: [query, ...history.filter(text => text !== query)],
    });
  };

  const searchHistory = new SearchHistory({
    $target,
    history: state.getState().history,
    onClick: event => {
      const li = event.target.closest('li');

      if (!li) return;

      setImages(li.textContent);
    },
  });

  SearchInput({
    $target: document.querySelector('form[role="search"]'),
    onInput: debounce(event => {
      const $input = event.target;
      setImages($input.value);
    }, 1000),
    onSubmit: event => {
      event.preventDefault();
      const $input = event.target.querySelector('input');
      setImages($input.value);
    },
  });

  const searchResullt = new SearchResult({
    $target,
    initialState: state.getState().result,
  });

  state.listen(() => {
    searchHistory.render(state.getState().history);
    searchResullt.render(state.getState().result);
  });
}

App(document.querySelector('#root'));
