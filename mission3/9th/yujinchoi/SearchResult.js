

export default function SearchResult ({data, $app}){

    const $target = document.createElement('div');
    $target.className = 'Search-Result'
    this.$target = $target;

    $app.appendChild($target);

    this.data = data;
    

    this.render = () => {
        if (this.data) {
            const htmlString = `${this.data
              .map((d) => `<img src="${d.imageUrl}">`)
              .join('')}`
            this.$target.innerHTML = htmlString
          } else {
            this.$target.innerHTML = ''
          }

    }

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render();

}