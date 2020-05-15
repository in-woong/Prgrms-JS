export const fetchJjalImages = value => {
  return new Promise(resolve => {
    try{
      fetch(`https://jjalbot.com/api/jjals?text=${value}`)
        .then(response => response.json())
        .then(data => resolve(data))
    }catch(e){
      console.log('fetch jjal image falied', e); 
    }
  });
}

