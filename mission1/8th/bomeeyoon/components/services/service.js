import { getData } from '../states/dataStates.js';

const log = console.log;

export default class Service {
  constructor() {}
  async search(query) {
    const response = await getData();
    return this.#changedData(response);
  }
  isChangedHandler(callback) {
    this.isChanged = callback;
  }
  #changedData(response) {
    this.isChanged(response);
  }
}
