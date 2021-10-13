class SearchResult {
  constructor(target) {
    this.$target = document.querySelector(target);
  }

  render(state) {
    const htmlString = `${state
      .filter((d) => d.imageUrl)
      .map((d) => `<img alt="${d.title}" src="${d.imageUrl}">`)
      .join('')}`;

    this.$target.innerHTML = htmlString;
  }
}

export default SearchResult;
