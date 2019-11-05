export default function SearchKeyword(data, $element){
    this.data = data;

    let $component = document.createElement('div')
    $component.setAttribute('id', 'search-result')  
    $element.appendChild($component)

    this.render = _ => {
        $component.innerHTML = `${this.data.map((d) => `<img src="${d.imageUrl}">`).join('')}`;

    }

    this.setState = data => {
        this.data = data;
        this.render()
    }
}