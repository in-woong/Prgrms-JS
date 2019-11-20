import SearchKeyword from './SearchKeyword.js';
import SearchResult from './SearchResult.js';

import { fetchData } from './DataManager.js';
import { alertErrorMsg } from './util.js';
export default class App {
    constructor({ elementId }) {
        this.data = [];
        this.elementId = elementId ? `#${ elementId }` : '#app';
        const [ inputClassName, resultClassName ] = [ 'search-keyword', 'search-result' ];
        const fetchImgData = async ( keyword ) => {
            try {
                const dataArr = await fetchData({ keyword });
                this.setState( dataArr );
            } catch ( err ) {
                alertErrorMsg( err );
            }
        };
        this.searchKeyword = new SearchKeyword({ elementId: this.elementId, target: inputClassName, fetchImgData });
        this.searchResult = new SearchResult({ elementId: this.elementId, target: resultClassName, data: this.data });
    }
    render() {
        this.searchResult.setState( this.data );
    }
    setState( data ) {
        this.data = data;
        this.render();
    }
}