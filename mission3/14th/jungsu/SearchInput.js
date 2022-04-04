
/*
 * input 내용이 변경되면, 해당 input 내용을 이용해 fetch API를 이용해 데이터를 가져옵니다
 * url : https://jjalbot.com/api/jjals?text=검색키워드
 * 
 * 
*/

export default function SearchInput({ $target, initialState }) {
    this.$element = document.createElement('input');
    this.state = initialState;

    $target.appendChild(this.$element);

    this.render = () => {

    }

    this.setState = (nextState) => {

    }
}


;(function () {
    document
      .querySelector('#search-keyword')
      .addEventListener('keyup', function (e) {
        fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
          .then((x) => x.json())
          .then((data) => {
            console.log(JSON.stringify(data, null, 2))
            const htmlString = `${data
              .map((d) => `<img src="${d.imageUrl}">`)
              .join('')}`
            document.querySelector('#search-result').innerHTML = htmlString
          })
      })
  })()