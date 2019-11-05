export default class TodoLoading{
    constructor({ elementId }) {
        // element 세팅
        const $app = document.querySelector( elementId );
        const $loadingBox = document.createElement( "div" );
        $app.append( $loadingBox );
        this.targetElement = $loadingBox;
    }
    render( status ) {
        if ( status ) {
            return this.targetElement.innerHTML = 'Lodaing....';
        }
        return this.targetElement.innerHTML = '';
    }
}