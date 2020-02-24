// ;(function() {
//   document
//     .querySelector('#search-keyword')
//     .addEventListener('keyup', function(e) {
//       fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
//         .then(x => x.json())
//         .then(data => {
//           console.log(JSON.stringify(data, null, 2))
//           const htmlString = `${data
//             .map(d => `<img src="${d.imageUrl}">`)
//             .join('')}`
//           document.querySelector('#search-result').innerHTML = htmlString
//         })
//     })
// })()

//Main.js
function App() {
  this.$searchKeyword = document.querySelector('#search-keyword')
  this.$selector = '#search-result'

  try {
    this.$searchResult = new SearchResult([], this.$selector)
  } catch (e) {
    console.log(e)
  }

  //KeyUp Event
  this.$searchKeyword.addEventListener('keyup', e => {
    loadData(e.target.value).then(data => this.setState(data))
  })

  this.setState = newData => {
    this.data = newData
    this.$searchResult.setState(newData)
  }

  //functions
  const loadData = value => {
    return fetch(`https://jjalbot.com/api/jjals?text=${value}`)
      .then(res => res.json())
      .then(data => {
        return data
      })
  }
}

new App()
