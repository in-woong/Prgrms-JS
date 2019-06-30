export default class StorageService {
  constructor(
    storage
  ) {
    this.storage = storage;
  }

  get(key) {
    return JSON.parse(this.storage.getItem(key));
  }

  set(key, value) {
    return this.storage.setItem(key, JSON.stringify(value));
  }

  has(key) {
    return this.storage.has(key);
  }

  remove(key) {
    return this.storage.removeItem(key);
  }

  clear() {
    return this.storage.clear();
  }
}