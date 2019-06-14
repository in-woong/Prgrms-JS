import { $, thrower } from "./util.js";

import SearchInput from "./SearchInput.js";
import SearchResult from "./SearchResult.js";

import * as types from "./types.js";

const App = (() => {
  const initialize = Symbol("initialize");
  const setState = Symbol("setState");

  return class {
    constructor($target) {
      if (!$target) {
        thrower(types.SEARCH_INPUT__INVALID_TARGET);
      } else {
        Object.assign(this, { $target });
        this[initialize]();
      }
    }

    [setState](keyword, data) {
      this.$searchKeywordResult.innerHTML = `'${keyword}' 검색 결과`;
      this.SearchResult.render(data);
    }

    [initialize]() {
      [
        ["afterbegin", `<input id="${types.SEARCH_KEYWORD_ID}" />`],
        ["beforeend", `<span id="${types.SEARCH_KEYWORD_RESULT_ID}"></span>`],
        ["beforeend", `<div id="${types.SEARCH_RESULT_ID}"></div>`]
      ].forEach(([elementPosition, element]) =>
        this.$target.insertAdjacentHTML(elementPosition, element)
      );

      this.SearchInput = new SearchInput(
        this.$target,
        this[setState].bind(this)
      );
      this.SearchResult = new SearchResult($(`#${types.SEARCH_RESULT_ID}`));
      this.$searchKeywordResult = $(`#${types.SEARCH_KEYWORD_RESULT_ID}`);
    }
  };
})();

export default App;
