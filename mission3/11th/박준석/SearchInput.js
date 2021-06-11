import { $ } from "./utils.js"

export default class SearchInput{
    constructor(){
        this.input = $('#search-keyword');

        this.input.addEventListener('keyup', this.getInput.bind(this))
    }

    async getInput(e){
        if (e.code === 'Enter'){
            const inputValue = this.input.value;
            const data = await this.sendInputValue(inputValue);
            console.log(data);
            document.querySelector('#search-result').innerHTML = data
        }
    }

    sendInputValue(inputValue){
        return fetch(`https://jjalbot.com/api/jjals?text=${inputValue}`)
          .then(x => x.json())
          .then(receivedData => {
            console.log(JSON.stringify(receivedData, null, 2))
            const htmlString = `${receivedData
              .map(d => `<img src="${d.imageUrl}">`)
              .join('')}`
              return (htmlString);
          })
    }
}

