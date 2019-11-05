import App from './App.js'

document.addEventListener('DOMContentLoaded', () => {
    try {
        new App(document.querySelector('#root'))
    } catch (error) {
        console.log('Index')
    }
})

