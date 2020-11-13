import App from './App.js'
import { checkValidElementId } from './validation.js'

new App({ $app: checkValidElementId('app') })
