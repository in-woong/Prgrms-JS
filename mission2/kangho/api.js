// function api() {
//       fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
//       .then(x => x.json())
//       .then((data) => {
//         console.log(JSON.stringify(data, null, 2))      
//         searchResult.setState(data);
//       })
// }

function API(BASE_URL) {
  this.BASE_URL = BASE_URL;

  this.httpGet = async function (value) {
    const res = await fetch(`${this.BASE_URL}?text=${value}`);
    const resJson = await res.json();
    return resJson;
  }
  

}