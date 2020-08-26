function SearchHistory({
  elementId,
  histories,
  searchJjals,
}) {
  this.$sectionSearchHistory = document.querySelector(`#${elementId}`);
  this.histories = histories;

  this.setState = (histories) => {
    this.histories = [...histories]
    this.render();
  }

  this.render = () => {
    this.$sectionSearchHistory.innerHTML = `
      <h2>검색 이력...</h2>
      <ul>
        ${this.histories.map((history) => `
          <li data-history=${history}>${history}</li>
        `).join('')}
      </ul>
    `;
  }

  this.bindEventHandler = () => {
    //section 요소에 event delegation
    this.$sectionSearchHistory.addEventListener('click',(event) => {
      //방어 코드
      if(!event.target.tagName === 'LI') {
        return;
      }
      searchJjals(event.target.dataset.history);
    });
  }

  this.render();
  this.bindEventHandler();
}
export default SearchHistory
