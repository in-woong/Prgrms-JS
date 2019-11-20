export default class SearchResult{
    constructor({ elementId, target, data }) {
        this.data = data;
        const $result = document.createElement('div');
        $result.className = target;
        document.querySelector( `${ elementId }` ).append( $result );
        this.targetElement = $result;
    }
    setState( data ) {
        this.data = data;
        this.render();
    }
    render() {
        const imgContents = this.data.map( img => `<img width="500" height="500" src=${ img.imageUrl } />` ).join();
        this.targetElement.innerHTML = imgContents;
    }
}