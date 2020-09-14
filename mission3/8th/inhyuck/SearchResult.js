export default function SearchResult({searchedItems}, target) {
    this.data = {searchedItems};
    this.$target = document.querySelector(target);

    this.render = function () {
        this.$target.innerHTML = `
              ${this.data.searchedItems
          .map(searchedItem => `<img src="${searchedItem.imageUrl}">`)
          .join('')}
        `;
    };

    this.setState = function ({searchedItems}) {
        this.data = {searchedItems};
        this.render();
    };

    this.render();
}
