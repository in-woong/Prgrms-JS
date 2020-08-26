export default function searchHistory({data,onSearch}){
    this.$searchHistory = document.querySelector('#search-history');
    this.data = data;
    this.$searchHistory.addEventListener("click", (event) => {
        const keyword = [event.target.innerText]
        if (keyword) {
            onSearch(keyword)
        }
    
      })
    this.setState=(newData)=>{
        //data.add(newData)
        //this.data = [...this.data,newData];
        this.render();
    }
    this.render=()=>{
        this.$searchHistory.innerHTML = `${this.data.history
            .map((value) => `<div class="history-keyword">${value}</div>`)
            .join('')}`
    }
}