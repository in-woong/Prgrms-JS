
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

  async httpGet(url, options = {queryParams: {}}) {
    const { queryParams } = options;
    try {
      const res = await fetch(`${this.BASE_URL}${url}?${this.getQueryString(queryParams)}`);
      const resJson = await res.json();
      return resJson;  
    } catch (e) {

    }
  }
  
  async httpPost(url, params = {}, options = {queryParams: {}}) {
    const { queryParams } = options;
    try {
      const res = await fetch(`${this.BASE_URL}${url}?${this.getQueryString(queryParams)}`, {
        method: "POST",
        body: JSON.stringify(params),
        headers: {
          'Content-Type': 'application/json'
        },
      });
      const resJSON = await res.json();
      return resJSON;
    } catch (e) {
    }
  }

  async httpPut(url, params = {}, options = {queryParams: {}}) {
    const { queryParams } = options;
    try {
      const res = await fetch(`${this.BASE_URL}${url}?${this.getQueryString(queryParams)}`, {
        method: "PUT",
        body: params,
      });
      const resJSON = await res.json();
      return resJSON;
    } catch (e) {
    }
  }

  async httpDelete(url, params = {}, options = {queryParams: {}}) {
    const { queryParams } = options;
    try {
      const res = await fetch(`${this.BASE_URL}${url}?${this.getQueryString(queryParams)}`, {
        method: "DELETE",
        body: params,
      });
      const resJSON = await res.json();
      return resJSON;
    } catch (e) {
    }
  }
}