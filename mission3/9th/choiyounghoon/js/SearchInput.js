export default function SearchInput({target,onSearch}){
    this.currentKeyword = "";
    this.inputString = "";
    this.$target = document.querySelector(target);
    let timer;

    this.$target.addEventListener("keyup",(e) => {
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(function(){
            if(e.target.value === "") return;
            onSearch(e.target.value);
        },500);
    });

    this.render = () => {
        this.$target.value = this.currentKeyword;
    };
    
    this.setState = (nextData) => {
        this.currentKeyword = nextData;
        this.render();
    };
}
