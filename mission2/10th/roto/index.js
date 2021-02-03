const initialState = JSON.parse(localStorage.getItem('roto-todo') || '[]')

// main#app
new App(document.querySelector('#app'), initialState)
