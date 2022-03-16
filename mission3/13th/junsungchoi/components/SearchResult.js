export default function SearchResult({ $target, initialState }) {
  this.$target = $target;
  this.state = initialState;

  const $result = document.createElement('div');
  $result.id = 'search-result';
  this.$target.appendChild($result);

  this.render = function() {
    const { jjals } = this.state;
    if (!Array.isArray(jjals)) {
      return
    }

    $result.innerHTML = jjals?.map(jjal =>
      `<figure>
        <figcaption>${jjal.title}</figcaption>
        <img src=${jjal.imageUrl} alt="jjal-result-img" />
      </figure>`
      ).join('');
  };

  this.setState = function(nextState) {
    this.state = nextState;
    this.render();
  };

  this.render();
};
