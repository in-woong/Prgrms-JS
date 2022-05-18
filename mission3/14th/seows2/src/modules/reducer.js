import api from '../api/requester.js';
import { INIT, SEARCH_ZZAL } from './actions.js';

const initialState = {
  searchResults: [],
  historyData: new Set(),
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case INIT:
      return state;
    case SEARCH_ZZAL:
      return {
        ...state,
        searchResults: payload.searchResult,
        historyData: state.historyData.add(payload.searchKeyword),
      };
    default:
      return state;
  }
};

export default reducer;
