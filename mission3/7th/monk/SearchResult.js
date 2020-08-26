function SearchResult({
  elementId,
  jjals,
}) {
  this.$sectionSearchResult = document.querySelector(`#${elementId}`);
  this.jjals = jjals;

  this.setState = (jjals) => {
    this.jjals = [...jjals]
    this.render();
  }

  this.render = () => {
    this.$sectionSearchResult.innerHTML = `
      <h2>검색 결과...</h2>
      <ul>
        ${this.jjals.map((jjal) => `
          <li><img src="${jjal.imageUrl}" alt="${jjal.tags.join(' ')}" /></li>
        `).join('')}
      </ul>
    `;
  }

  this.render();
  
}

export default SearchResult;
