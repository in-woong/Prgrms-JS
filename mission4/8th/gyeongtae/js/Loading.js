const loadingElement = document.querySelector('#loading')
export function showLoading() {
  loadingElement.style.display = 'inline-block'
}
export function hideLoading() {
  loadingElement.style.display = 'none'
}
