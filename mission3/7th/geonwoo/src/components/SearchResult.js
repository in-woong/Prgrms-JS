export default function SearchResult({ target, state }) {
  this.$target = target;
  this.gifData = state;

  this.setState = (newGifData) => {
    this.gifData = newGifData;
    this.render();
  };

  this.render = () => {
    this.$target.innerHTML = this.gifData
      .map(
        (gifItem) =>
          `<li><img src="${gifItem.imageUrl}" alt="${gifItem.title}"></li>`
      )
      .join('');
  };

  this.render();
}
