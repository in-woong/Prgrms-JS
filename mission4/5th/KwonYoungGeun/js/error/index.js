import ErrorView from '../components/ErrorView.js'

export const errorHandler = error => {
  console.dir(error)
  new ErrorView({
    target: '#error-message',
    errorMessage: '데이터를 가져오는데 실패하였습니다. 🥺',
  })
}
