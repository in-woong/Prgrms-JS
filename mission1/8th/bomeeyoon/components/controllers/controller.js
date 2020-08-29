import ListsView from '../views/todoListsView.js';
import Service from '../services/service.js';

const log = console.log;
const tag = '[controller.js]';

export default class Controller {
  constructor() {
    this.service = new Service();
    this.listsView = new ListsView();

    this.service.isChangedHandler(this.onChangedHandler.bind(this));
  }
  init() {
    this.service.search('INITIALIZE');
    this.listsView.setup();
  }
  onChangedHandler(lists) {
    this.listsView.render(lists);
  }
}
