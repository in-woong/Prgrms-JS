function SearchResult(data, target) {
    this.data = data;
    this.$target = document.querySelector(target);

    this.render = function () {
        this.$target.innerHTML = `${this.data
          .map(d => `<img src="${d.imageUrl}">`)
          .join('')}`;
    };

    this.setState = function (data) {
        this.data = data;
        this.render();
    };

    this.render();
}
