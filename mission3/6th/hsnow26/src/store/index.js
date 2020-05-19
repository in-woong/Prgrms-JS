const JJAL_URL = 'https://jjalbot.com/api/jjals'
const SEARCH_HISTORY_KEY = 'search_history'

const createOneParameterGetUrl = (url, key, value = null) => {
  const getUrl = new URL(url)
  if(!value){
    return getUrl
  }
  const search_params = getUrl.searchParams;
  search_params.set(key, value);
  getUrl.search = search_params.toString();

  return getUrl.toString()
}

export const fetchJjalImages = value => {
  return new Promise(resolve => {
    const url = createOneParameterGetUrl(JJAL_URL, 'text', value)
    try{
      fetch(url)
        .then(response => response.json())
        .then(data => resolve(data))
    }catch(e){
      console.log('fetch jjal image falied', e); 
    }
  });
}


export function saveSearchHistory(histories){
  localStorage.setItem(SEARCH_HISTORY_KEY, JSON.stringify(histories))
}

export function getSearchHistory(){
  const histories = getObject(SEARCH_HISTORY_KEY)
  return histories === null ? [] : histories
}

const getObject = (key) => {
  try {
      return JSON.parse(localStorage.getItem(key))
  } catch (e){
      console.error(e)
      return []
  }
}