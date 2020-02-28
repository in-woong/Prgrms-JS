import ErrorView from '../components/ErrorView.js'
import { selectors, ERROR_MESSAGE } from '../constants/index.js'

export const errorHandler = error => {
  console.error(error)
  new ErrorView({
    target: selectors.ERROR_VIEW,
    errorMessage: ERROR_MESSAGE,
  })
}
