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
        console.log(imagesElementString);
        domImagesRendered.innerHTML = imagesElementString;
    }
}

function init() {
    const searchResult = new SearchResult([], '#search-result');
    document.querySelector('#search-keyword').addEventListener('keyup', function(e) {
        fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
        .then(x => x.json())
        .then((data) => {
            // console.log(JSON.stringify(data, null, 2));
            searchResult.setState(data);
            // document.querySelector('#search-result').innerHTML = `${data.map((d) => `<img src="${d.imageUrl}">`).join('')}`
        })
    })
}
init();