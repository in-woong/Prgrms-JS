export default function SearchResult($app, data){
  this.$app = $app
  this.data = data
	this.$resultSearch = document.createElement('div')
	this.$resultSearch.id = 'search-result'

  this.render = () => {
    this.$resultSearch.innerHTML = this.data.map( d => `<img src="${d.imageUrl}">`).join('')
    this.$app.appendChild(this.$resultSearch)
  }

  this.setState = (nextState) => {
    this.data = nextState
    this.render()
  }
}
 