const MAX_HISTORY = 3

class SearchHistory {
  constructor(targetId, onSearch) {
    this.data = []
    this.$target = document.querySelector(targetId);
    this.$target.addEventListener('click', (e) => {
      onSearch(e.target.innerText);
    });
  }

  addKeyword(keyword) {
    if (this.data.includes(keyword))
      return;

    if (this.data.length >= MAX_HISTORY)
      this.data = this.data.slice(1, MAX_HISTORY)

    this.data.push(keyword);
    this.render();
  }
  
  render() {
    const htmlString = `${this.data.map(d => `<span data="">${d}</span>`).join('')}`
    this.$target.innerHTML = htmlString
  }
}

export default SearchHistory;
