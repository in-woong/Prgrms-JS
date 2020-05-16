function searchKeyword({ $inputSelector, onSearch }) {
  $inputSelector.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
      onSearch(e.target.value)
      $inputSelector.value = ''
    }
  })
}

export default searchKeyword
