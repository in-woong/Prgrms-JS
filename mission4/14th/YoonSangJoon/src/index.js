import App from './components/App.js';
import $ from './utils/dom.js';

const app = new App({
  $root: $('#root'),
  initialState: { currentUser: '', todos: [], users: [] },
});
app.init();
