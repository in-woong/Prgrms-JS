function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 2000);
    });
  }

export async function fetchJjalImages(){
    console.log("call")
    fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
          .then(response => response.json())
          .then(data => {
            return data
          })
    
}