const JJAL_URL = 'https://jjalbot.com/api/jjals'

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

