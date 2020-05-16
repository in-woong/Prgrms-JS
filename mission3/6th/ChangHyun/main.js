import App from './App.js'
import getJJALImgs from './api.js'

const app = new App(document.querySelector('#jjalbot'), getJJALImgs, 5)
app.init()
app.render()
app.bindEvent()
