import App from './components/App.js';
import { SELECTOR } from './utils/constant.js';

try {
  new App(document.querySelector(SELECTOR.GIF_APP));
} catch (err) {
  console.error(err);
}
