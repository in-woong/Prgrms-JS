function SearchResult(data, $target){
    this.data = data;
    this.$target = $target;

    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }

    this.render = () => {
        if(this.data.length > 0){
            const htmlString = this.data.map(d=>`<img src="${d.imageUrl}">`).join('');
            $target.innerHTML = htmlString;
        } else {
            $target.innerHTML = '해당하는 이미지가 없습니다.';
        }
    }
}