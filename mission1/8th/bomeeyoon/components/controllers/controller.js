import ListsView from '../views/todoListsView.js';
import Service from '../services/service.js';

const log = console.log;
const tag = '[controller.js]';

export default class Controller {
  constructor() {
    this.service = new Service();
    this.jsListsView = new ListsView('ul', 'js-lists');
    this.vueListsView = new ListsView('ul', 'vue-lists');
    this.reactListsView = new ListsView('ul', 'react-lists');
    this.typescriptListsView = new ListsView('ul', 'typescript-lists');
    this.service.isChangedHandler(this.onChangedHandler.bind(this));
  }
  init() {
    this.service.search('INITIALIZE');
  }
  onChangedHandler({ js, vue, react, typescript }) {
    this.jsListsView.render(js);
    this.vueListsView.render(vue);
    this.reactListsView.render(react);
    this.typescriptListsView.render(typescript);
  }
}
