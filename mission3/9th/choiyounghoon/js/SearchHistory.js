export default function SearchHistory({target,onClick}){
    this.keyword = [];
    this.$target =  document.querySelector(target);

    this.$target.addEventListener("click",(e) => {
        this.$target.value = e.target.innerHTML;
        onClick(e.target.innerHTML);
    });

    this.render = () => {
        const liElements = this.keyword
            .map( item => `<li>${item}</li>`)
            .join("");
        this.$target.innerHTML = liElements;

    }

    this.setState = (nextData) => {
        this.keyword.push(nextData);
        if(this.keyword.length>5) this.keyword.shift();
        this.render();
    }

    
}
