export default function SearchResult(data, $target){
    this.data = data;
    this.$target = $target;

    this.setState = (newData) => {
        this.data = newData;
        this.render();
    }

    this.render = () => {
        while (this.$target.hasChildNodes()) {
            this.$target.removeChild(this.$target.firstChild);
        }

        let $ol = document.createElement('ol');
        this.data.length === 0 ? $ol.innerHTML = '해당하는 이미지가 없습니다.'
            : $ol.innerHTML = this.data.map(d=>`
                <li><img src="${d.imageUrl}" alt=${d.shortId}></li>`).join(' ');
        this.$target.prepend($ol);
    }
}