export const dispatchRemoveAll = () => {
  window.dispatchEvent(new CustomEvent('removeAll'))
}
