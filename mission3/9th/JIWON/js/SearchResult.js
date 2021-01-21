export default function SearchResult(data){
  this.data = data;

  this.render = () => {
    const htmlString = `${this.data
      .map(d => `<img src="${d.imageUrl}">`)
      .join('')}`
    document.querySelector('#search-result').innerHTML = htmlString;
  
	}

  this.setState = (nextData) => {
    this.data = nextData;
    
		this.render();
	}
    
}
