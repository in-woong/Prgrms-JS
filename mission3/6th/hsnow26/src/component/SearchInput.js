export default function SearchResult(target, onSearchedJjalImage){
    this.$target = document.querySelector(target)

    this.$target.addEventListener('keyup', function(e) {
        fetch(`https://jjalbot.com/api/jjals?text=${e.target.value}`)
          .then(response => response.json())
          .then(data => onSearchedJjalImage(data))
      })
}