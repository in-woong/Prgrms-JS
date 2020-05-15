import {fetchJjalImages} from '../store/index.js'
export default function SearchResult(target, onSearchedJjalImage){
    this.$target = document.querySelector(target)

    

    this.$target.addEventListener('keyup', function(e) {
      test(e.target.value)
    })
    async function test(value){
      const data = await fetchJjalImages(value)
      console.log(data)
      onSearchedJjalImage(data)
    }

    function resolveAfter2Seconds() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve('resolved');
        }, 2000);
      });
    }
    
    async function fetchJjalImages(value){
      
      console.log("call")
      await resolveAfter2Seconds()
      console.log("start fetch")
      const testData = fetch(`https://jjalbot.com/api/jjals?text=${value}`)
        .then(response => response.json())
        .then(data => {
          console.log('fetchJjalImages', data)
          return data
        })
      console.log(testData)
      return testData
    }
}