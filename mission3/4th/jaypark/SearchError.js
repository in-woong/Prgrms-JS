class SearchError {
  constructor(targetId) {
    this.$target = document.querySelector(targetId);
    this.message = ''
  }

  setMessage(message) {
    this.message = message;
    this.render();
  }
  
  render() {
    this.$target.innerHTML = `<span class='error'>${this.message}</span>`
  }
}

export default SearchError;
