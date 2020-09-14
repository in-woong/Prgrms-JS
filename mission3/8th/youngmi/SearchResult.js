function SearchResult(app, data) {
    const $resultBox = document.querySelector('#search-result');

    this.app = app;
    this.data = data;

    this.render = () => {
        $resultBox.innerHTML = this.data.map((jjal, key) => {
            return jjal.videoUrl ?
                `<li key=${key}><video src="${jjal.videoUrl}"></li>`
                :
                `<img key=${key}><img src="${jjal.imageUrl}"></img>`
                ;
        }).join('');
        // console.log(resultData);
    }


    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }
    this.render();
}

export default SearchResult;
