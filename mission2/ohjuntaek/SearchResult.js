function SearchResult(data, target) {
    this.setState = function(nextData) {
        data = nextData;
        this.render();
    }
    this.render = function() {
        const domImagesRendered = document.querySelector(target);
        domImagesRendered.innerHTML = data.map((d) => `<img src="${d.imageUrl}">`).join('');
    }
}