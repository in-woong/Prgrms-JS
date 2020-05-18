function SearchInput($target, inputText) {
  validateTarget($target)

  this.target = $target
  this.inputText = inputText

  this.fetchData = function ({ inputText, onUpdateData }) {
    validateTarget($target)

    this.inputText = inputText
    fetch(`${SERVER_URL_JJALBOT}?text=${inputText}`)
      .then(response => response.json())
      .then(data => {
        onUpdateData(data)
      })
      .catch(err => console.log(`Err: ${err}`))
  }
}
