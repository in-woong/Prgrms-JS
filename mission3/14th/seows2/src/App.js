import { store } from './modules/store.js';
import ZZalPage from './pages/ZzalPage.js';

class App {
  constructor($target) {
    store.subscribe(() => {
      new ZZalPage($target, null, store);
    });

    this.initStore();
  }

  initStore() {
    store.dispatch('init');
  }
}

export default App;
