import App from './Components/App.js';

import { SELECTOR } from './utils/constant.js';

try {
  new App(document.querySelector(SELECTOR.TODO_APP));
} catch (err) {
  console.error(err);
}
