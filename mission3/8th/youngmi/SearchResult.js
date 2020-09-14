function SearchResult(data, target) {

    this.data = data;
    this.$resultBox = target;

    this.render = () => {
        this.$resultBox.innerHTML = this.data.map((jjal, key) => {
            return jjal.videoUrl ?
                `<li key=${key}><video src="${jjal.videoUrl}"></li>`
                :
                `<li key=${key}><img src="${jjal.imageUrl}"/></li>`;
        }).join('');
    }


    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }
    this.render();
}

export default SearchResult;
