function SearchResult(data, $target) {
  this.data = data
  this.$target = $target

  this.render = function(){
  const htmlString = `${this.data
    .map(d => `<img src="${d.imageUrl}">`)
    .join('')}`
  document.querySelector(this.$target).innerHTML = htmlString
  }

  this.setState = function(nextData){
     this.data = nextData
     this.render()
   }
   this.render()
}
