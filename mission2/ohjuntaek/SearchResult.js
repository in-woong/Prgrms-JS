function SearchResult(data, target) {
    this.setState = function(nextData) {
        data = nextData;
        this.render();
    }
    this.render = function() {
        const domImagesRendered = document.querySelector(target);
        let imagesElementString = ``;
        for (var i = 0, length = data.length; i < length; i++) {
            imagesElementString += `<img src="${data[i].imageUrl}">`;
        }
        domImagesRendered.innerHTML = imagesElementString;
        // domImagesRendered.innerHTML = data.map((d) => `<img src="${data[i].imageUrl}">`).join('');
    }
}