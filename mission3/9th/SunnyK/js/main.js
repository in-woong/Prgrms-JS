import App from './App.js'
import { checkValidElementId } from './util/validation.js'

new App({ $app: checkValidElementId('app') })
