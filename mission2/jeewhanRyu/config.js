import * as types from "./types.js";

export default {
  API_URL: "https://jjalbot.com/api/jjals",
  QUERY: "text",
  [types.SEARCH_INPUT__INVALID_TARGET]:
    "SearchInput의 렌더 대상이 잘못 지정되었습니다!",
  [types.SEARCH_RESULT__INVALID_TARGET]:
    "SearchResult의 렌더 대상이 잘못 지정되었습니다!",
  [types.DATA__NOT_FOUND]: "잘못된 데이터입니다!",
  [types.SEARCH_INPUT__INVALID_HANDLE_CHANGE]: "잘못된 인수입니다."
};
