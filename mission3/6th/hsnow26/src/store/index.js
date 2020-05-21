const JJAL_URL = 'https://jjalbot.com/api/jjals'
const SEARCH_HISTORY_KEY = 'search_history'
const JJAL_GET_KEY = 'text'

const createOneParameterGetUrl = (url, key, value = null) => {
  const getUrl = new URL(url)
  if(!value){
    return getUrl
  }
  const searchParams = getUrl.searchParams;
  searchParams.set(key, value);
  getUrl.search = searchParams.toString();

  return getUrl.toString()
}

export const fetchJjalImages = value => {
  return new Promise(resolve => {
    const url = createOneParameterGetUrl(JJAL_URL, JJAL_GET_KEY, value)
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