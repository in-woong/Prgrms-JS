export default function SearchResult({ initialState, $target }) {

    this.state = initialState;

    const $SearchResult = document.createElement("div");
    $target.appendChild($SearchResult);

    this.setState = (nextState) => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
            $SearchResult.innerHTML = `<ul>${this.state
            .map(data => `<li> <img src="${data.imageUrl}" alt="${data.title}}"> </li>`)
            .join('')}</ul>`;
    }

    this.render();    
}