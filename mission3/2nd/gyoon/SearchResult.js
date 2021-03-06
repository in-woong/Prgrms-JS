function SearchResult(data, target){
  // data is data to render, target is id? of element where data should be rendered
  this.data = data
  this.target = target
  let jjalMarkup = ''
  let jjalTags = ''
  this.render = function(){
    this.data.map(jjal => {
      const { 
        tags,
        title,
        videoUrl,
        imageUrl
      } = jjal
      tags.map(tag => jjalTags += `<span>#${tag} </span>`)
      jjalMarkup += 
        `<div>
          <a href=${videoUrl} target='_blank'>
            <img src=${imageUrl} width='30%' />
          </a>
          <div>${title}</div>
          <div>${jjalTags}</div>
        </div>`
    })
    document.querySelector(`${target}`).innerHTML = jjalMarkup
  }
  this.setState = function(data){
    this.data = data
    this.render()
  }
}
