export default class API {
  
  constructor(BASE_URL) {
    this.BASE_URL = BASE_URL;
  }

  getQueryString(queryParams) {
    const res = [];
    Object.keys(queryParams)
      .filter(paramsKey => queryParams[paramsKey])
      .forEach(paramsKey => res.push(`${paramsKey}=${queryParams[paramsKey]}`));
    return res.join('&');
  }

  async httpGet(queryParams) {
    try {
      const res = await fetch(`${this.BASE_URL}?${this.getQueryString(queryParams)}`);
      const resJson = await res.json();
      return resJson;  
    } catch (e) {

    }
  }
  

}