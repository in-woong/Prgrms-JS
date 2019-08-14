import { thrower } from "./util.js";

import * as types from "./types.js";

export default class SearchResult {
  constructor($target, data) {
    if (!($target instanceof Element)) {
      thrower(types.SEARCH_RESULT__INVALID_TARGET);
    }

    Object.assign(this, { $target, ...(data && { data }) });

    if (this.data) this.render();
  }

  render(data) {
    if (!Array.isArray(data)) thrower(types.DATA__NOT_FOUND);
    else if (!data.length) this.$target.innerHTML = "검색 결과가 없습니다.";
    else {
      this.$target.innerHTML = `${data
        .map(({ imageUrl }) => `<img src="${imageUrl}">`)
        .join("")}`;
    }
  }
}
