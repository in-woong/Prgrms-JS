import { $, thrower } from "./util.js";
import fetcher from "./fetcher.js";

import * as types from "./types.js";

const SearchInput = (() => {
  const initialize = Symbol("initialize");

  return class {
    constructor($target, handleChange) {
      if (!$target) {
        thrower(types.SEARCH_INPUT__INVALID_TARGET);
      } else if (typeof handleChange !== "function") {
        thrower(types.SEARCH_INPUT__INVALID_HANDLE_CHANGE);
      } else {
        Object.assign(this, { $target, handleChange });
        this[initialize]();
      }
    }

    [initialize]() {
      $(`#${types.SEARCH_KEYWORD_ID}`).addEventListener(
        "keyup",
        ({ target: { value } }) => {
          if (this.timer) clearTimeout(this.timer);

          if (value) {
            this.timer = setTimeout(
              async () => this.handleChange(value, await fetcher(value)),
              1000
            );
          }
        }
      );
    }
  };
})();

export default SearchInput;
