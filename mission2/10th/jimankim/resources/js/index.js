
import App from './app.js'

const inintialState = JSON.parse( localStorage.getItem('todo') || '[]' ); 
new App(document.querySelector('#app'), inintialState);
