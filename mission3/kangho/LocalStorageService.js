export default class LocalStorageService {
  constructor() {
  }

  get(key) {
    return JSON.parse(localStorage.getItem(key));
  }

  set(key, value) {
    return localStorage.setItem(key, JSON.stringify(value));
  }
}