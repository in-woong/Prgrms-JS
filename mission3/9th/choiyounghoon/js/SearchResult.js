  export default function SearchResult({data,target}){
    this.data = data;
    this.$target = target;

    this.render = () => {
        if(!this.data) return;
        const htmlString = `${this.data
            .map(d => `<img src="${d.imageUrl}">`)
            .join('')}`;
        document.querySelector(this.$target).innerHTML = htmlString;
    }
    
    this.setState = (nextData) => {
        this.data = nextData;
        this.render();
    }
}

