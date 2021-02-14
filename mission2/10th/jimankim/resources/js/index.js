import App from './app.js'

const initialState = JSON.parse( localStorage.getItem('todo') || [] ); 
new App(document.querySelector('#app'), initialState);
