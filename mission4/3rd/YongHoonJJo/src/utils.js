export const isLoading = () => {
  const $loading = document.querySelector('.modal-wrapper')
  $loading.style.display = 'flex';
}

export const endLoading = () => {
  const $loading = document.querySelector('.modal-wrapper')
  $loading.style.display = 'none';
}