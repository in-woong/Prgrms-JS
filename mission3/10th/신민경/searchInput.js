function SearchInput($target) {
  this.$target = $target

  document
    .querySelector($target)
    .addEventListener('keyup', function(e) {
      fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
        .then(x => x.json())
        .then(data => {
          this.setState(nextData)
        })
      })

      this.setState = function(nextData) {
        searchResult.setState(nextData)
      }
}
