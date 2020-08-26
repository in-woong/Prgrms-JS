export default function searchResult(data,target){
    this.data = data;
    this.target = target;

    this.setState=(newData)=>{
        this.data = newData;
        this.render();
    }
    this.render=()=>{
        const htmlString = `${this.data.searchData
            .map(d => `<img src="${d.imageUrl}">`)
            .join('')}`
          document.querySelector('#search-result').innerHTML = htmlString;
    }
    //this.render();
}