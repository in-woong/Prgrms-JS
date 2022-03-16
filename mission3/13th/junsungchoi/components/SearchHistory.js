export default function SearchHistory({ $target, initialState, onClickHistory }) {
  this.$target = $target;
  this.state = initialState;

  const $historyBox = document.createElement('div');
  this.$target.appendChild($historyBox);

  this.render = function() {
    const { searchHistory } = this.state;

    if (!Array.isArray(searchHistory) || searchHistory.length === 0) {
      return
    }

    $historyBox.innerHTML = `
      <article>검색결과: ${
        searchHistory
        .map(history => 
          `<span style="color:blue;padding:10px;cursor:pointer;">
            ${history}
          </span>`
        ).join('')
      }
      </article>`
  };

  $historyBox.addEventListener('click', function(e) {
    const $historyItem = e.target.closest('span');
    onClickHistory($historyItem.innerText)
  });

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
}
