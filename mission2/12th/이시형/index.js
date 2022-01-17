import App from './App.js'
import { stroageName,  getTodoItem} from './Storage.js'

const $target = document.querySelector('main')
new App({$target , data : getTodoItem(stroageName)})
