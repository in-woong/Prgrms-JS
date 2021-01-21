export default function SearchHistory($searchHistory, $searchInput, searchKeyword) {
  this.$searchHistory = $searchHistory;
  this.$searchInput = $searchInput;
  this.histories = [];

  this.setState = (newKeyword) => {
    const isNewKeyword = this.histories.includes(newKeyword);
    if (!isNewKeyword) {
      const $newHistory = document.createElement('li');
      $newHistory.innerText = newKeyword;
      $searchHistory.appendChild($newHistory);
      this.histories = this.histories.concat(newKeyword);
    }
  };

  this.bindEvent = () => {
    $searchHistory.addEventListener('click', (e) => {
      const { tagName, innerText } = e.target;
      if (tagName === 'LI') {
        searchKeyword(innerText);
        this.$searchInput.value = innerText;
      }
    });
  };

  this.bindEvent();
}
