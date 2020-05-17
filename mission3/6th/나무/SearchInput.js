function SearchInput($target, inputText) {
  this.target = $target
  this.inputText = inputText

  ValidateTarget($target)

  this.fetchData = function ({ inputText, onUpdateData }) {
    ValidateTarget($target)

    this.inputText = inputText
    fetch(`https://jjalbot.com/api/jjals?text=${inputText}`)
      .then(response => response.json())
      .then(data => {
        onUpdateData(data)
      })
      .catch(err => console.log(`Err: ${err}`))
  }
}
