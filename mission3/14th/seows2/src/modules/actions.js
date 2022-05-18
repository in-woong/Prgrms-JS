import createAction from '../core/Redux/createAction.js';

export const INIT = 'INIT';
export const SEARCH_ZZAL = 'SEARCH_ZZAL';

export const action = {
  INIT: () => createAction(INIT),
  SEARCH_ZZAL: (searchResult, searchKeyword) =>
    createAction(SEARCH_ZZAL, { searchResult, searchKeyword }),
};
