export default function SearchResult (initialState, $target){
  this.data = initialState;
  this.$target = $target;

  this.render = function(){
    document.querySelector(this.$target).innerHTML = `${this.data.map(d=>`
    <li>
      <img src="${d.imageUrl}">  
    </li>`).join('')}`
  }

  this.setState = function(nextData){
    this.data = nextData;
    this.render()
  }
  
  this.render()
}

