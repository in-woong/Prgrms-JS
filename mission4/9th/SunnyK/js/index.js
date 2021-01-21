import { checkElementId } from './util/validation.js'
import App from './comp/App.js'

try {
  new App({ $app: checkElementId('app') })
} catch (e) {
  console.error(e)
}
