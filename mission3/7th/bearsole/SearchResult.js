function SearchResult(data,target){
    this.data = data;
    this.target = target;

    this.render = function(){
        const htmlString = this.data.length === 0 ? "이미지가 없습니다!"
        : `${this.data
            .map(d => `<img src="${d.imageUrl}" style="margin : 5px; width:150px; height:150px">`)
            .join('')}`
        document.querySelector(`#${this.target}`).innerHTML = htmlString
    }

    this.setState = function(nextData){
        this.data = nextData;
        this.render();
    }
}